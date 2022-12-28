import { styled } from '@mui/material/styles';

const PREFIX = 'MiniPalette';
const classes = {
    root: `${PREFIX}-root`,
    colors: `${PREFIX}-colors`,
    title: `${PREFIX}-title`,
    emoji: `${PREFIX}-emoji`,
    miniColor: `${PREFIX}-miniColor`,
    delete: `${PREFIX}-delete`,
    deleteBtn: `${PREFIX}-deleteBtn`
}
const Root = styled('div')((theme) => ({
    [`&.${classes.root}`]: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        // overflow: 'hidden',
        '&:hover svg': {
            opacity: '1'
        }
    },
    [`& .${classes.colors}`]: {
        backgroundColor: 'gery',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    [`& .${classes.title}`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    [`& .${classes.emoji}`]: {
        marginLeft: '.5rem',
        fontSize: '1.5rem',
    },
    [`& .${classes.miniColor}`]: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px'
    },
    [`& .${classes.delete}`]: {

    },
    [`& .${classes.deleteBtn}`]: {
        color: '#fff',
        backgroundColor: '#eb3d30',
        width: '20px',
        height: '20px',
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '10px',
        zIndex: '10',
        opacity: '0',
        transition: 'all .3s ease-in-out',
    }
}));

export { classes, Root };