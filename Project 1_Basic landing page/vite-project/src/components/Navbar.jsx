
import React from "react"
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';

function Navbar() {

  const customstyle1={
    color: "white",
    backgroundColor: "red",
    border:"none",
    // padding:"2px",
    width:"120px"
    
       };

    return(
        <div>
      <nav>
        <div><img src="../public/brand_logo.png" alt="" srcset="" /></div>
        <div>
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div>  <Fab variant="extended" style={customstyle1} >
       
        LOGIN
      </Fab></div>
      
      </nav>
    </div>
    );
}
export default Navbar
