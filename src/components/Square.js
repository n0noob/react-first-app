import React from 'react';
import Button from '@material-ui/core/Button';
import '../index.css';


const Square = (props) => {
    return (
        <Button variant="outlined"
            className="square" 
            color="primary"
            onClick={props.onClick}
            disableElevation>
            {props.value}
        </Button>
    )

}

export default Square;