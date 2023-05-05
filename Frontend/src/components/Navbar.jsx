import GrainIcon from '@mui/icons-material/Grain';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LogoutIcon from '@mui/icons-material/Logout';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
}

export default function Navbar() {

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          to="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Headlines
        </NavLink>
        <NavLink
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          to="sports"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Sports
        </NavLink>
        <NavLink
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          to="tech"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
          Tech
        </NavLink>
        <NavLink
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          to="login"
          onClick={()=>{
            localStorage.clear()
          }}
        >
          <LogoutIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
          Login
        </NavLink>
      </Breadcrumbs>
    </div>
  );
}