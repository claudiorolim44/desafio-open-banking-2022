import React from 'react';
import logo from "./logo2.png"
import Paper from '@mui/material/Paper';
import './Navbar.css'

const Navbar = () => {  
    return(
        <Paper id="navBar" elevation={4}>
            <div className="headerBar maxPageWidth">
                <img src={logo} alt="Open Banking logo"/>
            </div>
        </Paper>
    )
}

export default  (Navbar)