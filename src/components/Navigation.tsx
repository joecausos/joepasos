import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

const navItems = [
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['History', 'history'],
  ['Projects', 'projects'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact']
];

function Navigation({parentToChild, modeChange}: any) {
  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <p className="mobile-menu-top" style={{ textAlign: 'left', paddingLeft: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ListIcon /> Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'left', pl: 3 }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        id="navigation" 
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`} 
        elevation={0}
        sx={{ 
          backgroundColor: scrolled ? (mode === 'dark' ? '#0d1117' : '#ffffff') : 'transparent',
          color: mode === 'dark' ? '#ffffff' : '#000000',
          transition: 'background-color 0.3s ease'
        }}
      >
        <Toolbar className='navigation-bar' sx={{ justifyContent: 'space-between', width: '100%' }}>
          
          {/* LEFT SIDE: Hamburger (Mobile) / Theme Selector (Desktop) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, mr: 1 }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <IconButton onClick={() => modeChange()} color="inherit">
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Box>

          {/* RIGHT SIDE: Nav Bar Links (Desktop) / Theme Selector (Mobile) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: 'inherit' }}>
                  {item[0]}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { sm: 'none' } }}>
              <IconButton onClick={() => modeChange()} color="inherit">
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Box>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;