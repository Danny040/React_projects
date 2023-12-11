import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import NavBar from '../NavBar/NavBar';
import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Navigate } from 'react-router-dom';

function Layout({defaultTheme}) {
    const { setAuth, setIsLoggedIn } = useContext(AuthContext);

    const logOutHandler = () => {
        setAuth({});
        setIsLoggedIn(false);
  }

    return (
        <>
            <NavBar defaultTheme={defaultTheme} logOutHandler={logOutHandler} />
            <Box sx={{margin: 5}}>
                <Outlet />
            </Box>
        </>
    );
}

export default Layout;