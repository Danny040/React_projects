import './About.css';
import { faker } from '@faker-js/faker';
import { TbSchool } from 'react-icons/tb';
import { SlCalender } from 'react-icons/sl';

function About(props) {
    const setOfSkills = props.skills.map((skill, index) => 
    <li key={index}>{skill}</li>);
    const educationList = props.education.map((item, index) =>
        <li key={index}>
            <h3>{item.type}</h3>
            <p>{item.name}</p>
            <div>
                <SlCalender className='calender'/> 
                <div className='dates'>
                    {item.period}
                </div>
            </div>
        </li>
    );

    return (
        <div className='container' id={props.id}>
            <div className='about-part animate__animated animate__fadeInDown animate__slow'>
                <h2>About Me</h2>
                <h1>{props.person.name + " " + props.person.surname}</h1>
                <h3>{props.person.jobTitle}</h3>
                <p>{faker.lorem.paragraph(7)}</p>
            </div>
            <div className='bottom-part-wrapper animate__animated animate__fadeInDown '>
            <div className='education'>
                <div className='education-text'>
                    <div className='stylish-circle'>
                        <TbSchool className='edu-icon'/>
                    </div>
                    <h3>Education</h3>
                </div>
                <ol>
                    {educationList}
                </ol>
            </div>
            <div className='skills'>
                <h3>Skills</h3>
                <ul>
                    {setOfSkills}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default About;