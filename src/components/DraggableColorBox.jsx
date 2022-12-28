import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { classes, Root } from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(({ color, name, handleDeletion }) => {
    return (
        <Root className={classes.root} style={{backgroundColor: color}} background={color}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteOutlinedIcon
                    className={classes.deleteIcon}
                    onClick={handleDeletion}
                />
            </div>
        </Root>
    );
});

export default DraggableColorBox;