import {AppBar,Toolbar,Typography,IconButton,makeStyles} from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
<AppBar position="absolute" style={{backgroundColor: "transparent",height: "10%"}}>
  <Toolbar variant="dense">
    <NavLink to ="./" style= { {color:"cyan",
        textDecoration: 'none',
        marginTop: "18px",
        marginLeft: "200px",
        fontSize: 35,
        fontFamily:'arial'
    }}>
      INFINITLY  
    </NavLink>
    
  </Toolbar>
  
</AppBar>
    )
}

export default NavBar;