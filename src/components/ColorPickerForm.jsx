import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { classes, Root } from '../styles/ColorPickerFormStyles';

function ColorPickerForm({ colors, addNewColor }) {
    const [currentColor, setcurrentColor] = useState("black");
    const [newColorName, setnewColorName] = useState("");

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return colors.every(({ color }) => color !== currentColor)
        });
    }, [colors, currentColor]);

    const handleChange = e => {
        setnewColorName(e.target.value);
    }

    const handleSubmit = () => {
        const newColor = { color: currentColor, name: newColorName };
        addNewColor(newColor);
        setnewColorName('');
    }

    return (
        <Root className={classes.root}>
            <ChromePicker
                className={classes.picker}
                color={currentColor}
                onChangeComplete={newColor => { setcurrentColor(newColor.hex); setnewColorName(newColor.hex); }}
            />
            <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
                <TextValidator
                    className={classes.addColorInput}
                    value={newColorName}
                    onChange={handleChange}
                    margin="normal"
                    label="Color Name"
                    variant="filled"
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['this field is required', 'Color name already taken', 'Color already taken']}
                />
                <Button
                    className={classes.addColorBtn}
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: currentColor }}
                    type="submit"
                >
                    Add Color
                </Button>
            </ValidatorForm>
        </Root>
    );
}

export default ColorPickerForm;