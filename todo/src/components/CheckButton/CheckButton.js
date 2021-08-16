import React from 'react';
//need to import material check and return it 
//listen for the click
//do similar function as to delete button
//but add it into a new array 
//use the new array to render another todo list
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
const CheckButton = ({ isChecked, setIsChecked, theValue, setValue}) => {
    //create a function to handle the click
    const handleClick = () => {
        //
        console.log('you clicked the check button');
        //depending if the user checks or unchecks we set check
        if(isChecked){
            setIsChecked(false);
            setValue('');

        } else {
            setIsChecked(true);
            setValue(theValue);
        }
    }
    return (
        <div>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                onClick={handleClick}
              />
            </ListItemIcon>
        </div>
    );
}
export default CheckButton;