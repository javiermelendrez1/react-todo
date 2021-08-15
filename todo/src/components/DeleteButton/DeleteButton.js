import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'; //icon for the delete 
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const DeleteButton = ({todoArray, setTodoArray, value}) => {
    //we need to create a function to handle click event
    const onDeleteClick = () => {
        //
        console.log('you clicked the trash can')
        //when the user clicks the trash can the item should be deleted from the array
        //filter the array
        //return array where the items do not equal the value of the click list item
        const newTodo = todoArray.filter(todo => todo !== value);
        //update the array
        setTodoArray(newTodo);

    }
    return (
        <div>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={onDeleteClick}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
        </div>

    );
}
export default DeleteButton;