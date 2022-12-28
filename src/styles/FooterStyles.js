import { styled } from '@mui/material/styles';

const PREFIX = 'Footer';
const classes = {
    root: `${PREFIX}-root`,
    emoji: `${PREFIX}-emoji`
}
const Root = styled('div')((theme) => ({
    [`&.${classes.root}`]: {
        backgroundColor: '#fff',
        height: '5vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    [`& .${classes.emoji}`]: {
        fontSize: '1.5rem',
        margin: '1rem'
    }
}));

export { classes, Root };