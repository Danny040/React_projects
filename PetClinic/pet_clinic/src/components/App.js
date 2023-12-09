import Layout from "./Layout/Layout";
import LogIn from './LogIn/LogIn';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { createTheme } from "@mui/material";
import Home from './Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';

const defaultTheme = createTheme({ 
  palette: {
    mode: 'light',
    primary: {
      main: '#81c784',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#ab47bc',
    },
  }
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout defaultTheme={defaultTheme} />}>
          <Route index element={<Home defaultTheme={defaultTheme}/>} />
          <Route path='/login' element={<LogIn defaultTheme={defaultTheme}/>} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
