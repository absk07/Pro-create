import React, { useState } from 'react';
import Slider from 'rc-slider';
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { classes, Root } from '../styles/NavbarStyles';
import 'rc-slider/assets/index.css';

function Navbar({ level, changeLevel, changeFormat, showingShades }) {
    const [format, setFormat] = useState('hex');
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = e => {
        setFormat(e.target.value);
        changeFormat(e.target.value);
        setOpen(true);
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <Root className={classes.root}>
            <div className={classes.logo}>
                <a href="/" className={classes.anchor}>ReactColorPicker</a>
            </div>
            { showingShades === false &&
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onChange={changeLevel}
                        />
                    </div>
                </div>
            }
            <div className={classes.selectContainer}>
                <Select value={format} onChange={handleChange}>
                <MenuItem value='hex'>HEX - #fff</MenuItem>
                <MenuItem value='rgb'>rgb - rgb(255, 255, 255)</MenuItem>
                <MenuItem value='rgba'>rgba - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                severity="success"
                message={`Format Changed to ${format.toUpperCase()}`}
                action={action}
            />
        </Root>
    );
}

export default Navbar;