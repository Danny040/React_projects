import { BsGithub, BsTelegram, BsDiscord } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

function ContactLinks() {
    return (
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
    );
}

export default ContactLinks;