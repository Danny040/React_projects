import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home.js';
import About from './About/About.js';
import Projects from './Projects/Projects.js';
import Contact from './Contact/Contact';
import { useState } from 'react';


function App() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    console.log("ok");
    setTheme((current)=>(current === "light" ? "dark" : "light"));
  };
  // defining some valus
  const person = {name: "Name", surname: "Surname", jobTitle: "Job Title"};
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  const education = [{type: "High school", name: "High school name", period: "24.07.2020"}, 
  {type: "BIT", name: "University name", period: "24.08.2023 - ???"}];

    return (
        <Routes>
          <Route path="/" element={<Layout id={theme} person={person} toggleTheme={toggleTheme} />}>
            <Route index element={<Home id={theme} person={person} />} />
            <Route path="/about" element={<About id={theme} person={person} skills={skills} education={education} />} />
            <Route path="/projects" element={<Projects id={theme} />} />
            <Route path="/contact" element={<Contact id={theme} />} />
          </Route>
        </Routes>
    );
}

export default App;