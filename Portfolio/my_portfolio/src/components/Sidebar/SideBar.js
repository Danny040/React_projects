import './SideBar.css';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu.js'


function SideBar(props) {
    return (
        <div className='nav-bar' id={props.id}>
            <div className='profile-info'>
                <Link className='profile-picture' to="/">
                    <div className='outer-circle'>
                        <div className='inner-circle'>
                            <img src={props.profilePicture} alt="profile picture"/>
                        </div>
                    </div>
                </Link>
                <div className='basic-info'>
                    <h2 className='name-surname'>
                        {props.firstname + " " + props.surname}
                    </h2>
                    <p className='job-title'>
                        {props.jobTitle}
                    </p>
                </div>
            </div>
            <Menu id={props.id}/>
        </div>
    );
}

export default SideBar;