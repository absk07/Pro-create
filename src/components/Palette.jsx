import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { classes, Root } from '../styles/PaletteStyles';

function Palette({ palette }) {
    // console.log(palette)
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const colorBoxes = palette.colors[level].map(c => <ColorBox key={c.id} background={c[format]} name={c.name} paletteId={palette.id} id={c.id} showLink={true} />);

    const changeFormat = val => {
        setFormat(val);
    }

    return (
        <Root className={classes.root}>
            <Navbar 
                level={level} 
                changeLevel={level => setLevel(level)} 
                changeFormat={changeFormat}
                showingShades={false}
            />
            <div className={classes.paletteColors}>
                {colorBoxes}
            </div>
            <Footer name={palette.paletteName} emoji={palette.emoji} />
        </Root>
    );
}

export default Palette;