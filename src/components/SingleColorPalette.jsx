import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { classes, Root } from '../styles/PaletteStyles';

function SingleColorPalette({ palette, colorId }) {
    const [format, setFormat] = useState('hex');
    let navigate = useNavigate();

    const gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy));
        }
        return shades.slice(1);
    }

    const _shades = gatherShades(palette, colorId);
    // console.log(_shades);

    const changeFormat = val => {
        setFormat(val);
    }

    return (
        <Root className={classes.root}>
            <Navbar 
                changeFormat={changeFormat}
                showingShades={true}
            />
            <div className={classes.paletteColors}>
                {
                    _shades.map(color => (
                        <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
                    ))
                }
                <div className={classes.goBack}>
                    <button onClick={() => navigate(-1)} className={classes.backButton}>Go Back!</button>
                </div>
            </div>
            <Footer 
                name={palette.paletteName}
                emoji={palette.emoji} 
            />
        </Root>
    );
}

export default SingleColorPalette;