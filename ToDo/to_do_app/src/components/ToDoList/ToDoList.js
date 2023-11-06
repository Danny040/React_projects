import './ToDoList.css';
import ToDoCard from '../ToDoCard/ToDoCard.js';

function ToDoList({todos}) {
    return (
        <div className='list-wrapper'>
            {todos.map((item)=>{
                console.log(item);
                return (
                    <ToDoCard key={item.id} toDoName={item.name} toDoDesc={item.description} />
                );
            })}
        </div>
    );
}

export default ToDoList;