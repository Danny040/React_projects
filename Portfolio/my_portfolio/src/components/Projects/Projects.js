import './Projects.css';
import Slider from '../Slider/Slider';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useState } from 'react';

function Projects({id, projects}) {
    const [startEnd, setStartEnd] = useState([0, 3]);

    const nextSlide = () => {
        if (startEnd[1] >= projects.length) {
            setStartEnd([0, 3]);
        } 
        else {
            setStartEnd(startEnd.map((item)=>{
                return item + 3;
            }));
        }
    };

    const prevSlide = () => {
        if (startEnd[0] <= 0) {
            setStartEnd([projects.length-3, projects.length]);
        } 
        else {
            setStartEnd(startEnd.map((item)=>{
                if (item - 3 < 0){
                    return 0;
                }
                return item - 3;
            }));
        }
    };

    return (
        <div className='container' id={id}>
            <h2 className='animate__animated animate__fadeInDown animate__delay-1s'>My Projects</h2>
            <div className='gallery animate__animated animate__fadeInDown'>
                <Slider images={projects} startEndPoints={startEnd}/>
            </div>
            <div className='slider-buttons animate__animated animate__fadeInDown'>
                <AiOutlineArrowLeft onClick={prevSlide} id={id} className='left-arrow' />
                <AiOutlineArrowRight onClick={nextSlide} id={id} className='right-arrow' />
            </div>
        </div>
    );
}

export default Projects;