import Fab from '@mui/material/Fab';


import React from 'react'

const Button_cp = (props) => {
    return (

        <Fab variant="extended" style={{ height: "34px", margin: "5px" }}
            onClick={() => props.onClick(props.temp)}

        >
            {props.name}
        </Fab>
    )
}

export default Button_cp;








