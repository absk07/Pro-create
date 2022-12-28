import chroma from 'chroma-js';
import { styled } from '@mui/material/styles';
import sizes from './sizes';

const PREFIX = 'DraggableColorBox';
const classes = {
    root: `${PREFIX}-root`,
    boxContent: `${PREFIX}-boxContent`,
    deleteIcon: `${PREFIX}-deleteIcon`,
}
const Root = styled('div')(({ background }) => ({
    [`&.${classes.root}`]: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover svg': {
            color: '#FFFFFF',
            transform: 'scale(1.5)'
        },
        [sizes.down('lg')]: {
            width: '50%',
            height: '10%'
        },
        [sizes.down('md')]: {
            width: '100%',
            height: '10%'
        }
    },
    [`& .${classes.boxContent}`]: {
        color: chroma(background).luminance() >= 0.7 ? 'black' : 'white',
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    [`& .${classes.deleteIcon}`]: {
        color: 'rgba(0, 0, 0, .5)',
        transition: 'all 0.3s ease-in-out'
    }
}));

export { classes, Root };