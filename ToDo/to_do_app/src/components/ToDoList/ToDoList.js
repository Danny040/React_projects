import './ToDoList.css';
import ToDoCard from '../ToDoCard/ToDoCard.js';

function ToDoList({todos, setTodos}) {
    return (
        <div className='list-wrapper'>
            {todos.map((item)=>{
                return (
                    <ToDoCard key={item.id} todo={item} toDoName={item.name} toDoDesc={item.description} todos={todos} setTodos={setTodos} />
                );
            })}
        </div>
    );
}

export default ToDoList;