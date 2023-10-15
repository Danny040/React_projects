import './Layout.css';
import SideBar from '../Sidebar/SideBar';
import ProfileP from '../../assets/bender.jpeg';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function Layout(props) {
    return (
        <div className='layout'>
            <SideBar firstname={props.person.name} surname={props.person.surname} jobTitle={props.person.jobTitle} profilePicture={ProfileP} />
            <div className='page'>
                <Outlet />
            </div>
            <div className='night-day-switch-wrapper'>
                <button className='night-day-switch'>
                    <BsFillMoonFill className='moon-sun'/>
                </button>
            </div>
        </div>
    );
}

export default Layout;