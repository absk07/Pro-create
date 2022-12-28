import { styled } from '@mui/material/styles';
import sizes from './sizes';

const PREFIX = 'Navbar';
const classes = {
    root: `${PREFIX}-root`,
    logo: `${PREFIX}-logo`,
    anchor: `${PREFIX}-anchor`,
    slider: `${PREFIX}-slider`,
    selectContainer: `${PREFIX}-selectContainer`
}
const Root = styled('header')((theme) => ({
    [`&.${classes.root}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh'
    },
    [`& .${classes.logo}`]: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'roboto, "Helvetica Neue"',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        [sizes.down('sm')]: {
            display: 'none'
        }
    },
    [`& .${classes.anchor}`]: {
        textDecoration: 'none',
        color: 'black'
    },
    [`& .${classes.slider}`]: {
        width: '340px',
        margin: '0 10px',
        display: 'inline-block',
        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },
        '& .rc-slider-rail': {
            height: '8px'
        },
        '& .rc-slider-handle, &:active .rc-slider-handle, &:focus .rc-slider-handle, &:hover .rc-slider-handle': {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-2px'
        },
        [sizes.down('md')]: {
            width: '200px'
        },
        [sizes.down('sm')]: {
            width: '100px'
        }
    },
    [`& .${classes.selectContainer}`]: {
        marginLeft: 'auto',
        marginRight: '1rem'
    }
}));

export { classes, Root };