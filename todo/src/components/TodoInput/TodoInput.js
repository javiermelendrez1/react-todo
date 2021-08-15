import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const TodoInput = () => {
    //going to create a state for the user todo
    const[usertask, setUsertask] = useState(''); //by default task is empty string
    //create a handler to track the user task being entered
    const changeHandler = (e) => {
        //update the user task value
        setUsertask(e.target.value);
    }
    //create a handler for when the user clicks the submit button
    const submitHandler = (e) => {
        //
        e.preventDefault(); //prevent the page from refreshing
        //set the user task to a blank string again to empty out the input form
        setUsertask('');
    }
    //the form for the user to input their todo should be returned 
    return (
        <div>
            <form onSubmit={submitHandler}>
            <TextField id="standard-basic" label="Enter todo" value={usertask} onChange={changeHandler}/>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </div>
    );
};
export default TodoInput;