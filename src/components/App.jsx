import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import '../assets/styles/App.css';
import seedColors from '../seedColors';
import generatePalette from '../helpers/colorHelper';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palette, setPalette] = useState((savedPalettes.length > 0) ? savedPalettes : seedColors);
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  const findPalette = id => palette.find(p => p.id === id);

  const deletePalette = id => {
    setPalette(palette.filter(p => p.id !== id));
  }

  const PaletteComponentWrapper = () => {
    const { id } = useParams();
    return <Palette palette={generatePalette(findPalette(id))} />;
  }

  const SingleColorPaletteComponentWrapper = () => {
    const { id, colorId } = useParams();
    return <SingleColorPalette colorId={colorId} palette={generatePalette(findPalette(id))} />;
  }

  const savePaletteHandler = (newPalette) => {
    setPalette([...palette, newPalette]);
  }

  const handleAnimation = () => {
    if (transitionStage === "fadeOut") {
      setTransistionStage("fadeIn");
      setDisplayLocation(location);
    }
  }

  function syncLocalStotage() {
    window.localStorage.setItem('palettes', JSON.stringify(palette));
  }

  useEffect(() => {
    syncLocalStotage();
  });

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div className={`${transitionStage}`} onAnimationEnd={handleAnimation}>
      <Routes location={displayLocation}>
        <Route exact="true" path="/" element={<PaletteList palettes={palette} deletePalette={deletePalette} />} />
        <Route exact="true" path="/palette/new" element={<NewPaletteForm palettes={palette} savePalette={savePaletteHandler} />} />
        <Route exact="true" path="/palette/:id" element={<PaletteComponentWrapper />} />
        <Route exact="true" path="/palette/:id/:colorId" element={<SingleColorPaletteComponentWrapper />} />
        <Route path="*" element={<PaletteList palettes={palette} deletePalette={deletePalette} />} />
      </Routes>
    </div>
  );
}

export default App;
