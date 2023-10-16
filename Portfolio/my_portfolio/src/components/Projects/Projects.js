import './Projects.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Slider from '../Slider/Slider';
import { useState } from 'react';

function Projects() {
    const images = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const [startEnd, setStartEnd] = useState([0, 4]);

    const nextSlide = () => {
        if (startEnd[1] === images.length) {
            setStartEnd(()=>{
                startEnd[0] = 0;
                startEnd[1] = 4;
                return startEnd;
            });
        } 
        else {
            setStartEnd(()=>{
                startEnd[0] += 4;
                startEnd[1] += 4;
                console.log(startEnd);
                return startEnd;
            });
        }
    };
    const prevSlide = () => {

    };

    return (
        <div className='container'>
            <h2>My Projects</h2>
            <div className='gallery'>
                <Slider points={startEnd} images={images}/>
            </div>
            <div className='slider-buttons'>
                <AiOutlineArrowLeft onClick={prevSlide} className='left-arrow' />
                <AiOutlineArrowRight onClick={nextSlide} className='right-arrow' />
            </div>
        </div>
    );
}

export default Projects;