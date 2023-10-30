import './Slider.css';

function Slider({images, startEndPoints}) {
    const itemClassNames = ['one', 'two', 'three'];
    let itemClassName = -1;
    return (
        <>
            {images.slice(startEndPoints[0], startEndPoints[1]).map((number, index) => {
                itemClassName++;
                return (
                    <div key={index} className={'work-container ' + itemClassNames[itemClassName]}>
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