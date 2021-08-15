import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'; //icon for the delete 
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const DeleteButton = () => {
    return (
        <div>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
        </div>

    );
}
export default DeleteButton;