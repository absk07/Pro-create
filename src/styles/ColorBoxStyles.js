import chroma from 'chroma-js';
import { styled } from '@mui/material/styles';
import sizes from './sizes';

const PREFIX = 'ColorBox';
const classes = {
    root: `${PREFIX}-root`,
    copyText: `${PREFIX}-copyText`,
    colorName: `${PREFIX}-colorName`,
    seeMore: `${PREFIX}-seeMore`,
    copyButton: `${PREFIX}-copyButton`,
    copied: `${PREFIX}-copied`,
    boxContent: `${PREFIX}-boxContent`,
    copyOverlay: `${PREFIX}-copyOverlay`,
    showOverlay: `${PREFIX}-showOverlay`,
    copyMessage: `${PREFIX}-copyMessage`,
    showMessage: `${PREFIX}-showMessage`,
}
const Root = styled('div')(({ theme, showLink, background }) => ({
    [`&.${classes.root}`]: {
        width: '20%',
        height: showLink ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover button': {
            opacity: '1',
            transition: '0.5s'
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: showLink ? '20%' : '33.3333%',
        },
        [sizes.down('md')]: {
            width: '50%',
            height: showLink ? '10%' : '20%',
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: showLink ? '5%' : '10%',
        }
    },
    [`& .${classes.copyText}`]: {
        color: chroma(background).luminance() >= 0.7 ? 'black' : 'white',
        fontSize: '2rem',
        fontWeight: '100'
    },
    [`& .${classes.colorName}`]: {
        color: chroma(background).luminance() <= 0.08 ? 'white' : 'black'
    },
    [`& .${classes.seeMore}`]: {
        color: chroma(background).luminance() >= 0.7 ? 'black' : 'white',
        background: 'rgba(255, 255, 255, .3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
    },
    [`& .${classes.copyButton}`]: {
        color: chroma(background).luminance() >= 0.7 ? 'black' : 'white',
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
        textDecoration: 'none',
        opacity: '0'
    },
    [`& .${classes.copied}`]: {
        fontWeight: '400',
        textShadow: '1px 2px black',
        background: 'rgba(255, 255, 255, .3)',
        width: '100%',
        textAlign: 'center',
        marginBottom: '0',
        padding: '1rem',
        textTransform: 'uppercase',
        [sizes.down('sm')]: {
            fontSize: '3rem'
        }
    },
    [`& .${classes.boxContent}`]: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px'
    },
    [`& .${classes.copyOverlay}`]: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(.1)'
    },
    [`& .${classes.showOverlay}`]: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute'
    },
    [`& .${classes.copyMessage}`]: {
        position: 'fixed',
        left: '0px',
        right: '0px',
        top: '0px',
        bottom: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: '#fff'
    },
    [`& .${classes.showMessage}`]: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all .4s ease-in-out',
        transitionDelay: '.3s'
    }
}));

export {classes, Root};