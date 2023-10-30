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
    setTheme((current)=>(current === "light" ? "dark" : "light"));
  };
  // defining some valus
  const contactLinks = {github: "https://github.com", leetcode: "https://leetcode.com", telegram: "https://telegram.org", discord: "https://discord.com"};
  const images = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const location = {address: "Vaasa", lat: 63.09757782574895, lng: 21.62155685846934, zoom: 13};
  const person = {name: "Name", surname: "Surname", jobTitle: "Job Title"};
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  const education = [{type: "High school", name: "High school name", period: "24.07.2020"}, 
  {type: "BIT", name: "University name", period: "24.08.2023 - ???"}];

    return (
        <Routes>
          <Route path="/" element={<Layout id={theme} person={person} toggleTheme={toggleTheme} />}>
            <Route index element={<Home id={theme} person={person} urls={contactLinks}/>} />
            <Route path="/about" element={<About id={theme} person={person} skills={skills} education={education} />} />
            <Route path="/projects" element={<Projects id={theme} projects={images} />} />
            <Route path="/contact" element={<Contact id={theme} location={location}/>} />
          </Route>
        </Routes>
    );
}

export default App;