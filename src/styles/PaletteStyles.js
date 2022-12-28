import { styled } from '@mui/material/styles';
import sizes from './sizes';

const PREFIX = 'Palette';
const classes = {
    root: `${PREFIX}-root`,
    paletteColors: `${PREFIX}-paletteColors`,
    goBack: `${PREFIX}-goBack`,
    backButton: `${PREFIX}-backButton`
}
const Root = styled('div')((theme) => ({
    [`&.${classes.root}`]: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    [`& .${classes.paletteColors}`]: {
        height: '90%',
        overflow: 'hidden'
    },
    [`& .${classes.goBack}`]: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        opacity: '1',
        backgroundColor: 'black',
        [sizes.down('lg')]: {
            width: '25%',
            height: '33.3333%'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '20%'
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '10%'
        },
    },
    [`& .${classes.backButton}`]: {
        color: 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, .3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none'
    }
}));

export { classes, Root };