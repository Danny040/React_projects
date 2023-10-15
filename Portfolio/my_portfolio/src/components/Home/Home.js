import './Home.css';
import { BsGithub, BsTelegram, BsDiscord } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

function Home(props) {
    return (
        <div className="container">
            <div className='top-part'>
                <h1 className='animate__animated animate__fadeInDown'>{props.person.name + " " + props.person.surname}</h1>
                <h2 className='animate__animated animate__fadeInDown animate__fast animate__delay-0.9s'>{props.person.jobTitle}</h2>
            </div>
            <div className='bottom-part animate__animated animate__fadeInDown animate__fast animate__delay-1.5s'>
                <div className='wrapper'>
                <a className='link-button' target="_blank" href="https://github.com/Danny040">
                    <div>
                        <BsGithub className='github' />
                    </div>
                </a>
                <a className='link-button' target="_blank" href="">
                    <div>
                        <SiLeetcode className='leetcode'/>
                    </div>
                </a>
                <a className='link-button' target="_blank" href="">
                    <div>
                        <BsTelegram className='telegram'/>
                    </div>
                </a>
                <a className='link-button' target="_blank" href="">
                    <div>
                        <BsDiscord className='discord'/>
                    </div>
                </a>
                </div>
            </div>
        </div>
    );
}

export default Home;