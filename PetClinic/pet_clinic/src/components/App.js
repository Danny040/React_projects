import Layout from "./Layout/Layout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
