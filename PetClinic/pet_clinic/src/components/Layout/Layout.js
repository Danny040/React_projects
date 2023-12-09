import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import NavBar from '../NavBar/NavBar';

function Layout({defaultTheme}) {
    return (
        <>
            <NavBar defaultTheme={defaultTheme} />
            <Box sx={{margin: 5}}>
                <Outlet />
            </Box>
        </>
    );
}

export default Layout;