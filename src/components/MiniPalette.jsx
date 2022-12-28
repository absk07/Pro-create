import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { classes, Root } from '../styles/MiniPaletteStyles';

function MiniPalette({ paletteName, emoji, colors, handleDialog, id }) {
    const deletePalette = e => {
        e.stopPropagation();
        e.preventDefault();
        handleDialog(id);
    }

    return (
        <Root className={classes.root}>
            <div className={classes.delete}>
                <DeleteIcon
                    className={classes.deleteBtn}
                    onClick={deletePalette}
                />
            </div>
            <div className={classes.colors}>
                {
                    colors.map(color => (
                        <div key={color.name} className={classes.miniColor} style={{ backgroundColor: color.color }}></div>
                    ))
                }
            </div>
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </Root>
    );
}

export default MiniPalette;