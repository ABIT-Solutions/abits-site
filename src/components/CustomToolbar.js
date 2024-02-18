import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const CustomToolbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="customToolbar" id="customToolbar">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ABIT Solutions
        </Typography>
        <button className="toolbarlink" onClick={() => scrollToSection('companyTopTitle')}>Home</button>
        <button className="toolbarlink" onClick={() => scrollToSection('companyTopSubtitle')}>About Us</button> 
        <button className="toolbarlink" onClick={() => scrollToSection('ServicesTitle')}>Our Services</button>
        <button className="toolbarlink" onClick={() => scrollToSection('ContactUsTitle')}>Request a Demo</button>
        <button className="toolbarlink" onClick={() => scrollToSection('ContactUsTitle')}>Contact Us</button>
      </Toolbar>
    </div>
  );
};

export default CustomToolbar;
