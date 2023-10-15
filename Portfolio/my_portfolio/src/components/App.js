import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home.js';
import About from './About/About.js';
import Projects from './Projects/Projects.js';
import Contact from './Contact/Contact';



function App() {
  // defining some valus
  const person = {name: "Name", surname: "Surname", jobTitle: "Job Title"};
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
    return (
        <Routes>
          <Route path="/" element={<Layout person={person} />}>
            <Route index element={<Home person={person} />} />
            <Route path="/about" element={<About person={person} skills={skills} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    );
}

export default App;