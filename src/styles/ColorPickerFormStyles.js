import { styled } from '@mui/material/styles';

const PREFIX = 'ColorPickerForm';
const classes = {
    root: `${PREFIX}-root`,
    picker: `${PREFIX}-picker`,
    addColorBtn: `${PREFIX}-addColorBtn`,
    addColorInput: `${PREFIX}-addColorInput`
}

const Root = styled('div')(() => ({
    [`&.${classes.root}`]: {
        width: '100%'
    },
    [`& .${classes.picker}`]: {
        width: '100% !important',
        marginTop: '2rem'
    },
    [`& .${classes.addColorBtn}`]: {
        width: '100%',
        height: '50px',
        padding: '1rem',
        marginTop: '1rem',
        fontSize: '2rem'
    },
    [`& .${classes.addColorInput}`]: {
        width: '100%'
    }
}));

export { classes, Root };