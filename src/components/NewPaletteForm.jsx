import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { arrayMoveImmutable } from 'array-move';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { drawerWidth, classes, Container, Main, DrawerHeader } from '../styles/NewPaletteFormStyles';
import seedColors from '../seedColors';

function NewPaletteForm({ palettes, savePalette }) {
    const [open, setOpen] = useState(true);
    const [colors, setColors] = useState(seedColors[0].colors);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const addNewColor = newColor => {
        setColors([...colors, newColor]);
    }

    const removeColor = colorName => {
        setColors(colors.filter(c => c.name !== colorName));
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
        setColors(arrayMoveImmutable(colors, oldIndex, newIndex));
    }

    const clearColors = () => {
        setColors([]);
    }

    const addRandomColors = () => {
        const allColors = palettes.map(p => p.colors).flat();
        let rand;
        let randomColor;
        let isDuplicateColor = true;
        while(isDuplicateColor) {
            rand = Math.floor(Math.random() * allColors.length);
            randomColor = allColors[rand];
            // eslint-disable-next-line no-loop-func
            isDuplicateColor = colors.some(color => color.name === randomColor.name);
        }
        setColors([...colors, randomColor]);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <PaletteFormNav
                open={open} 
                savePalette={savePalette} 
                colors={colors}
                handleDrawerOpen={handleDrawerOpen}
                palettes={palettes}
            />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '360px',
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Container className={classes.container}>
                    <Typography variant="h4" gutterBottom>Design Your Palette</Typography>
                    <div className={classes.buttons}>
                        <Button className={classes.button} variant="contained" color="secondary" onClick={clearColors}>Clear Paltette</Button>
                        <Button className={classes.button} variant="contained" color="primary" onClick={addRandomColors}>Random Color</Button>
                    </div>
                    <ColorPickerForm colors={colors} addNewColor={addNewColor} />
                </Container>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <DraggableColorList 
                    colors={colors} 
                    removeColor={removeColor}
                    axis="xy"
                    onSortEnd={onSortEnd}
                />
            </Main>
        </Box>
    );
}

export default NewPaletteForm;