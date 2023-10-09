import './SideBar.css';
import { Link } from 'react-router-dom';
import ProfileP from '../../assets/bender.jpeg';

function SideBar() {
    return (
        <div className='nav-bar'>
            <div className='profile-info'>
                <Link className='profile-picture' to="/">
                    <div className='outer-circle'>
                        <div className='inner-circle'>
                            <img src={ProfileP} alt="profile picture"/>
                        </div>
                    </div>
                </Link>
                <div className='basic-info'>
                    <h2 className='name-surname'>
                        Name Surname
                    </h2>
                    <p className='job-title'>
                        Full Stack Developer
                    </p>
                </div>
            </div>
            <div className='site-navigation'>

            </div>
        </div>
    );
}

export default SideBar;