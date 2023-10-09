import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
    return (
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
    );
}

export default App;