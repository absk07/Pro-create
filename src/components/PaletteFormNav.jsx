import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PaletteModalForm from './PaletteModalForm';
import { Root, AppBar, classes } from '../styles/PaletteFormNavStyles';

function PaletteFormNav({ open, savePalette, colors, handleDrawerOpen, palettes }) {
    const navigate = useNavigate();
    const [showForm, setshowForm] = useState(false);

    const handleShowForm = () => {
        setshowForm(true);
    }

    const handleHideForm = () => {
        setshowForm(false);
    }

    return (
        <Root className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="default">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h7" noWrap component="div">
                        Create A Palette
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Button className={classes.btn} onClick={() => navigate(-1)} variant="contained" color="secondary">Go Back</Button>
                    <Button className={classes.btn} variant="contained" onClick={handleShowForm}>Save Palette</Button>
                </div>
            </AppBar>
            {
                showForm && <PaletteModalForm palettes={palettes} colors={colors} savePalette={savePalette} hideForm={handleHideForm} />
            }
        </Root>
    );
}

export default PaletteFormNav;