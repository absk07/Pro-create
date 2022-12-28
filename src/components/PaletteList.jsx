import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { blue, red } from '@mui/material/colors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { classes, Root } from '../styles/PaletteListStyles';
import MiniPalette from './MiniPalette';

function PaletteList({ palettes, deletePalette }) {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deletingId, setDeletingId] = useState("");

    const openDialog = (id) => {
        setOpenDeleteDialog(true);
        setDeletingId(id);
    }

    const closeDialog = () => {
        setOpenDeleteDialog(false);
        setDeletingId("");
    }

    const handleDelete = () => {
        deletePalette(deletingId);
        closeDialog();
    }

    return (
        <Root className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>MY PALETTES</h1>
                    <Link to="/palette/new">
                        <AddToPhotosIcon />
                        Create Palette
                    </Link>
                </nav>
                <TransitionGroup className={classes.palette}>
                    {
                        palettes.map((palette) =>
                            <CSSTransition key={palette.id} classNames="item" timeout={500}>
                                <Link to={`/palette/${palette.id}`} style={{textDecoration: 'none'}}>
                                    <MiniPalette 
                                        {...palette}
                                        handleDialog={openDialog}
                                        key={palette.id} 
                                        id={palette.id} 
                                    />
                                </Link>
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
            <div>
                <Dialog open={openDeleteDialog} aria-labelledby="delete-dialog" onClose={closeDialog}>
                    <DialogTitle id="delete-dialog">Delete this Palette?</DialogTitle>
                    <List sx={{ pt: 0 }}>
                        <ListItem button onClick={handleDelete}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button onClick={closeDialog}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancle" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        </Root>
    );
}

export default PaletteList;