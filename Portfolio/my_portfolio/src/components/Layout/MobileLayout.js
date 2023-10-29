import SideBar from '../Sidebar/SideBar';
import ProfileP from '../../assets/bender.jpeg';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import './MobileLayout.css';
import { useState } from 'react';

function MobileLayout(props) {
    const [isActive, setIsActive] = useState(false);

    const toggleClassName = () => {
        return isActive ? setIsActive(false) : setIsActive(true);
    }

    return (
        <div className='layout-2' id={props.id}>
                <div className='top-nav-bar' id={props.id}>
                    <div className='hamburger-menu'>
                        <button className='hb-menu' onClick={toggleClassName} >
                            {isActive ? <AiOutlineClose /> : <FiMenu /> }
                        </button>
                    </div>
                    <div className='night-day-switch-wrapper-2'>
                        <button className='night-day-switch' id={props.id} onClick={() => props.toggleTheme()}>
                            {props.id === "light" ? <BsFillMoonFill className='moon-sun'/> :
                                <BsFillSunFill className='moon-sun'/>
                            }
                        </button>
                    </div>
                </div>
            <div className='page-2'>
                <div className={isActive ? 'animate__animated animate__fadeInLeft show' : 'hide'}>
                    <SideBar id={props.id} firstname={props.person.name} surname={props.person.surname} jobTitle={props.person.jobTitle} profilePicture={ProfileP} />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default MobileLayout;