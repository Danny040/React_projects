import SideBar from '../Sidebar/SideBar';
import ProfileP from '../../assets/bender.jpeg';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';

function DesktopLayout(props) {
    return (
        <div className='layout' id={props.id}>
            <SideBar id={props.id} firstname={props.person.name} surname={props.person.surname} jobTitle={props.person.jobTitle} profilePicture={ProfileP} />
            <div className='page'>
                <Outlet />
            </div>
            <div className='night-day-switch-wrapper'>
                <button className='night-day-switch' id={props.id} onClick={() => props.toggleTheme()}>
                    {props.id === "light" ? <BsFillMoonFill className='moon-sun'/> :
                    <BsFillSunFill className='moon-sun'/>
                    }
                    
                </button>
            </div>
        </div>
    );
}

export default DesktopLayout;