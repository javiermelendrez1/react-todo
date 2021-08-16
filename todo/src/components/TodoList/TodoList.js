import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  DeleteButton  from '../DeleteButton/DeleteButton';
import  CheckButton  from '../CheckButton/CheckButton';

const TodoList = ({todoArray, setTodoArray}) => {
    //going to be returning a list 
    //going to have to keep mapping to print every list
    //create a state for if the task is check or not
    const[isChecked,setIsChecked] = useState(false); //by default we are going to say it is not checked
    const[theValue, setValue] = useState(''); // a state to hold the value
    return (
        <List dense >
          {todoArray.map((value) => {
            return (
              <ListItem key={value} button>
                  <CheckButton  isChecked={isChecked} setIsChecked={setIsChecked} theValue={value} setValue={setValue}/>
                <ListItemText primary={value} style={{textDecoration : isChecked && theValue === value ? 'line-through' : 'none'}}/>
                <DeleteButton todoArray={todoArray} setTodoArray={setTodoArray} value={value}/>
              </ListItem>
            );
          })}
        </List>
      );

};
export default TodoList;