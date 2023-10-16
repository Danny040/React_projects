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
  const education = [{type: "High school", name: "High school name", period: "24.07.2020"}, 
  {type: "BIT", name: "University name", period: "24.08.2023 - ???"}];

    return (
        <Routes>
          <Route path="/" element={<Layout person={person} />}>
            <Route index element={<Home person={person} />} />
            <Route path="/about" element={<About person={person} skills={skills} education={education} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    );
}

export default App;