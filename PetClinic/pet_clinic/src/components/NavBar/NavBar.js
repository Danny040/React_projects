import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import { useContext } from 'react';


export default function NavBar({defaultTheme, logOutHandler}) {
  const { auth } = useContext(AuthContext);

  return (
    <ThemeProvider theme={defaultTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pet Clinic
          </Typography>
          
          {auth.accessToken === undefined ? <>
            <Link to='/'>
              <Button color="inherit" sx={{color: '#fafafa'}} >Home</Button>
            </Link>
            <Link to='/login'>
              <Button color="inherit" sx={{color: '#fafafa'}}>LogIn</Button>
            </Link> 
          </> : 
          <>
          <Button color="inherit" sx={{color: "#fafafa"}} onClick={logOutHandler}>LogOut</Button>
          </> }
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}