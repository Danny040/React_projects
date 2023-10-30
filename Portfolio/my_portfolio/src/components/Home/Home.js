import './Home.css';
import ContactLinks from '../ContactLinks/ContactLinks';

function Home(props) {
    return (
        <div className="container" id={props.id}>
            <div className='top-part'>
                <h1 className='animate__animated animate__fadeInDown'>{props.person.name + " " + props.person.surname}</h1>
                <h2 className='animate__animated animate__fadeInDown animate__fast animate__delay-0.9s'>{props.person.jobTitle}</h2>
            </div>
            <div className='bottom-part animate__animated animate__fadeInDown animate__fast animate__delay-1.5s'>
                <ContactLinks urls={props.urls} />
            </div>
        </div>
    );
}

export default Home;