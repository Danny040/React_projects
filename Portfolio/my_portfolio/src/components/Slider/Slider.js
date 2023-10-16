import './Slider.css';

function Slider({points, images}) {
    
    return (
        <>
            {images.slice(points[0], points[1]).map((number, index) => {
                return (
                    <div key={index} className='work-container'>
                        <a  target="_blank" className='project-link'>
                            <img src={process.env.PUBLIC_URL + ` /projects/${number}.jpeg`} />
                        </a>
                    </div>
                );     
            })}
        </>
    );
}

export default Slider;