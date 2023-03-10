import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
    return (
        <div style={{ height: 'calc(100% - 76px)' }}>
            {
                colors.map((color, idx) => <DraggableColorBox
                    index={idx}
                    key={color.name}
                    color={color.color} 
                    name={color.name} 
                    handleDeletion={() => removeColor(color.name)}
                />)
            }
        </div>
    );
});

export default DraggableColorList;