import { styled } from '@mui/material/styles';
import sizes from './sizes';

const PREFIX = 'PaletteList';
const classes = {
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`,
  nav: `${PREFIX}-nav`,
  palette: `${PREFIX}-palette`,
}
const Root = styled('div')((theme) => ({
    [`&.${classes.root}`]: {
        backgroundColor: '#000000',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23222222' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23444444' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23666666' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23888888' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23aaaaaa' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23cccccc' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23EEE' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'scroll',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    [`& .${classes.container}`]: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('xl')]: {
            width: '80%'
        },
        [sizes.down('sm')]: {
            width: '60%'
        }
    },
    [`& .${classes.nav}`]: {
        display: 'flex',
        width: '94%',
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center',
        '& a': {
            color: 'white',
            display: 'flex',
            textDecoration: 'none',
            transition: 'transform .2s'
        },
        '&:hover a': {
            transform: 'scale(1.5)'
        }
    },
    [`& .${classes.palette}`]: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '1rem',
        [sizes.down('md')]: {
            gridTemplateColumns: 'repeat(2, 50%)'
        },
        [sizes.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 100%)'
        },
        
    }
}));

export { classes, Root };