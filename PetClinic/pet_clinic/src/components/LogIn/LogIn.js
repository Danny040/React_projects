import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:4000/login';

export default function SignIn({defaultTheme}) {
  const { setAuth, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [psw, setPsw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  useEffect(()=>{
    setErrorMessage('');
  }, [user, psw]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, {
        email: user,
        password: psw
      });
      const accessToken = response.data.access_token;
      setAuth({user: user, password: psw, accessToken: accessToken});
      setUser('');
      setPsw('');
      setIsLoggedIn(true);
    } catch (err) {
      if (!err.response) {
        setErrorMessage('No responce from the server.');
      } else if (err.response.status === 401) {
        setErrorMessage('Unauthorised.');
      } else {
        setErrorMessage('LogIn failed.')
      }
    }
  };

  const handleUserName = (event) => {
    setUser(event.target.value);
  }

  const handlePsw = (event) => {
    setPsw(event.target.value);
  }

  if(isLoggedIn) {
    return (<Navigate to="/user" />);
  }
  else {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                value={user}
                onChange={handleUserName}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
              />
              <TextField
                value={psw}
                onChange={handlePsw}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          {errorMessage !== '' ? 
          <Box>
            <Alert severity="error">{errorMessage}</Alert>
          </Box> : <></>}
        </Container>
      </ThemeProvider>
     );
  }
}