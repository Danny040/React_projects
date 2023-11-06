import './ToDoCard.css';
import {FiEdit, FiCheckSquare} from 'react-icons/fi';
import {IoTrashBinOutline} from 'react-icons/io5';

function ToDoCard({toDoName, toDoDesc}) {
    return (
        <div className='card-container'>
            <div className='content'>
                <h2>{toDoName}</h2>
                <p>{toDoDesc}</p>
            </div>
            <div className='options'>
                <FiEdit className='edit' />
                <FiCheckSquare className='completed' />
                <IoTrashBinOutline className='delete' />
            </div>
        </div>
    );
}

export default ToDoCard;