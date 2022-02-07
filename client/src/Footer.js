import React from 'react';
import Paper from '@mui/material/Paper';
import logoGithub from "./logo-github.png"
import logoStackoverflow from "./logo-stackoverflow.png"
import logoLinkeding from "./logo-linkeding.png"
import './Footer.css'

const Footer = () => {
    return (
        <Paper id="footer"  elevation={4}>
            <div className="footerTopPart maxPageWidth">
                 <a href="https://github.com/claudiorolim44/desafio-open-banking-2022" 
                    target="_blank" rel="noreferrer">
                    <img src={logoGithub} alt="Logo Github"/>
                </a>
                <a href="https://stackoverflow.com/users/5091674/claudio-augusto-pereira-rolim" 
                    target="_blank" rel="noreferrer">
                    <img src={logoStackoverflow} alt="Logo Stackoverflow"/>
                </a>                       
                <a href="https://www.linkedin.com/in/claudio-augusto-rolim-9b799986/" 
                    target="_blank" rel="noreferrer">
                    <img src={logoLinkeding} alt="Logo Linkeding"/>
                </a>
            </div>
            <div className="footerBottomPart maxPageWidth">
                <span>CLAUDIO AUGUSTO PEREIRA ROLIM | 2022</span>  
            </div>
        </Paper>
    )
}

export default(Footer)