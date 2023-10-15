import './About.css';
import { faker } from '@faker-js/faker';

function About(props) {
    const setOfSkills = props.skills.map((skill, index) => 
    <li key={index}>{skill}</li>
    );
    return (
        <div className='container'>
            <div className='about-part'>
                <h2>About me</h2>
                <h1>{props.person.name + " " + props.person.surname}</h1>
                <h3>{props.person.jobTitle}</h3>
                <p>{faker.lorem.paragraph(7)}</p>
            </div>
            <div className='education'>
                
            </div>
            <div className='skills'>
                <ul>
                    {setOfSkills}
                </ul>
            </div>
        </div>
    );
}

export default About;