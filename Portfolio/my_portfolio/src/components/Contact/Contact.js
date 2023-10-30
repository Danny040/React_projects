import './Contact.css';
import ContactLinks from '../ContactLinks/ContactLinks';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Contact(props) {

    return (
        <div className="container" id={props.id}>
            <h2 className='animate__animated animate__fadeInDown animate__delay-1s'>Contact Me</h2>
            <div className='map-container animate__animated animate__fadeInDown'>
            <MapContainer center={[props.location.lat, props.location.lng]} zoom={props.location.zoom} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[props.location.lat, props.location.lng]}>
                        <Popup>
                            Almost found me xD
                        </Popup>
                    </Marker>
            </MapContainer>
            </div>
            <div className='bottom-part animate__animated animate__fadeInDown animate__fast animate__delay-1.5s'>
                <ContactLinks />
            </div>
        </div>
    );
}

export default Contact;