import './ToDoCard.css';
import {FiEdit, FiCheckSquare} from 'react-icons/fi';
import {IoTrashBinOutline} from 'react-icons/io5';

function ToDoCard({toDoName, toDoDesc, todos, setTodos, todo}) {

    const handleDelete = () => {
        setTodos(todos.filter((el) => todo.id !== el.id));
    }

    const handleCheck = () => {
        setTodos(todos.map((item)=>{
            if(todo.id === item.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className='card-container'>
            <div className={`content ${todo.completed ? 'done' : ''}`}>
                <h2>{toDoName}</h2>
                <p>{toDoDesc}</p>
            </div>
            <div className='options'>
                <FiCheckSquare onClick={handleCheck} className='completed' />
                <IoTrashBinOutline onClick={handleDelete} className='delete' />
            </div>
        </div>
    );
}

export default ToDoCard;