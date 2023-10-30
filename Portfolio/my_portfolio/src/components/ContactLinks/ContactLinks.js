import { BsGithub, BsTelegram, BsDiscord } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

function ContactLinks(props) {
    return (
        <div className='wrapper'>
                <a className='link-button' target="_blank" href={props.urls.github}>
                    <div>
                        <BsGithub className='github' />
                    </div>
                </a>
                <a className='link-button' target="_blank" href={props.urls.leetcode}>
                    <div>
                        <SiLeetcode className='leetcode'/>
                    </div>
                </a>
                <a className='link-button' target="_blank" href={props.urls.telegram}>
                    <div>
                        <BsTelegram className='telegram'/>
                    </div>
                </a>
                <a className='link-button' target="_blank" href={props.urls.discord}>
                    <div>
                        <BsDiscord className='discord'/>
                    </div>
                </a>
                </div>
    );
}

export default ContactLinks;