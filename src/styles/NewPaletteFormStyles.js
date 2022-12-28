import { styled } from '@mui/material/styles';

const drawerWidth = 360;

const PREFIX = 'NewPaletteForm';
const classes = {
    container: `${PREFIX}-container`,
    buttons: `${PREFIX}-buttons`,
    button: `${PREFIX}-button`
}

const Container = styled('div')(() => ({
    [`&.${classes.container}`]: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem'
    },
    [`& .${classes.buttons}`]: {
        width: '100%'
    },
    [`& .${classes.button}`]: {
        width: '50%'
    }
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        height: '100vh',
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export { drawerWidth, classes, Container, Main, DrawerHeader };