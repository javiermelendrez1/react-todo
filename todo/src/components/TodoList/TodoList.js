import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  DeleteButton  from '../DeleteButton/DeleteButton';
import  CheckButton  from '../CheckButton/CheckButton';
const TodoList = ({todoArray, setTodoArray}) => {
    //going to be returning a list 
    //going to have to keep mapping to print every list

    // return (
    //     <div>
    //         {
    //             todoArray.map((value) => (
    //                 <h1 key={value}>{value}</h1>
                    
    //             ))
    //         }
    //     </div>
    // );
    return (
        <List dense >
          {todoArray.map((value) => {
            return (
              <ListItem key={value} button>
                  <CheckButton />
                <ListItemText primary={value} />
                <DeleteButton todoArray={todoArray} setTodoArray={setTodoArray} value={value}/>
              </ListItem>
            );
          })}
        </List>
      );

};
export default TodoList;