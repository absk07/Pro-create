import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function PaletteModalForm({ palettes, colors, savePalette, hideForm }) {
    const navigate = useNavigate();
    const [newPaletteName, setnewPaletteName] = useState("");
    const [stage, setStage] = useState("form");

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        });
    }, [palettes]);

    const paletteHandleChange = e => {
        setnewPaletteName(e.target.value);
    }

    const handleSubmit = () => {
        setStage("emoji");
    }

    const savePaletteHandler = (emoji) => {
        let name = newPaletteName;
        const newPalette = {
            paletteName: name,
            id: name.toLowerCase().replace(/ /g, "-"),
            colors: colors,
            emoji: emoji.native,
        }
        savePalette(newPalette);
        setStage("");
        navigate(-1);
    }

    return (
        <div>
            <Dialog open={stage === "emoji"} onClose={hideForm}>
                <DialogTitle>Choose a Palette Emoji</DialogTitle>
                <Picker 
                    data={data} 
                    onEmojiSelect={savePaletteHandler} 
                />
            </Dialog>
            <Dialog open={stage === "form"} onClose={hideForm}>
                <DialogTitle>Choose a Palette name</DialogTitle>
                <ValidatorForm onSubmit={handleSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            Choose a new Palette name. Make sure it is unique.
                        </DialogContentText>
                        <TextValidator
                            label="Palette Name"
                            value={newPaletteName}
                            onChange={paletteHandleChange}
                            variant="filled"
                            fullWidth
                            margin="normal"
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['this field is required', 'Palette name already taken']}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm}>Cancel</Button>
                        <Button type="submit" variant="contained" color="success">Save Palette</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}

export default PaletteModalForm;