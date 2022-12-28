import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import sizes from './sizes';

const drawerWidth = 360;

const PREFIX = 'NavForm';
const classes = {
    root: `${PREFIX}-root`,
    navBtns: `${PREFIX}-navBtns`,
    btn: `${PREFIX}-btn`
}

const Root = styled('div')(() => ({
    [`&.${classes.root}`]: {
        display: 'flex'
    },
    [`& .${classes.navBtns}`]: {
        marginRight: '1rem',
        [sizes.down('sm')]: {
            marginRight: '0.5rem'
        }
    },
    [`& .${classes.btn}`]: {
        margin: '0 0.5rem',
        [sizes.down('sm')]: {
            margin: '0 0.2rem',
            padding: '0.2rem',
            fontSize: '0.6rem'
        }
    }
}));

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: '64px'
    }),
    ...(!open && {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: '64px'
    })
}));

export { Root, AppBar, classes };