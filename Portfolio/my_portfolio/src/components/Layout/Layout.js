import './Layout.css';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';
import { useState, useEffect } from 'react';

function Layout(props) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        // cleaning up 
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const breakPoint = 1200;


    return (
        <>
            {width < breakPoint ? <MobileLayout id={props.id} person={props.person} toggleTheme={props.toggleTheme} /> : <DesktopLayout id={props.id} person={props.person} toggleTheme={props.toggleTheme} />}
        </>
    );
}

export default Layout;