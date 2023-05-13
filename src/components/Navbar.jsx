import { Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-scroll';

export const Navbar = () => {

    const [activeLink, setActiveLink] = useState('');
    const handleSetActive = (to) => {
        setActiveLink(to);
      };
  return (
    <>
    
    <ul style={{cursor: "pointer"}}>
        <Link to="facundo" smooth={true} duration={1000} spy={true}
    onSetActive={() => handleSetActive('facundo')}><Typography variant="h6"  style={{fontFamily: 'Bebas Neue, cursive', color: activeLink === 'facundo' ? '#33c9dc' : '#c5cae9',}}>Facundo</Typography></Link>
        <Link to="portfolio" smooth={true} duration={1000} spy={true}
    onSetActive={() =>  handleSetActive('portfolio')}><Typography variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', color: activeLink === 'portfolio' ? '#33c9dc' : '#c5cae9', }}>Portfolio</Typography></Link>
        <Link to="educacion" smooth={true} duration={1000} spy={true}
    onSetActive={() =>  handleSetActive('educacion')}><Typography variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', color: activeLink === 'educacion' ? '#33c9dc' : '#c5cae9' }}>Educacion</Typography></Link>
        <Link to="skills" smooth={true} duration={1000} spy={true}
    onSetActive={() =>  handleSetActive('skills')}><Typography variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', color: activeLink === 'skills' ? '#33c9dc' : '#c5cae9' }}>Skills</Typography></Link>
        <Link to="contact" smooth={true} duration={1000} spy={true}
    onSetActive={() =>  handleSetActive('contact')}><Typography variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', color: activeLink === 'contact' ? '#33c9dc' : '#c5cae9' }}>Contact</Typography></Link>
        </ul>

    </>
  )
}
