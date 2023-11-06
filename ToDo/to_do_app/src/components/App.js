import NewToDoCard from './NewToDoCard/NewToDoCard';
import ToDoList from './ToDoList/ToDoList';
import './App.css';
import { SiAddthis } from 'react-icons/si';
import { FaListCheck } from 'react-icons/fa6';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [isNewCard, setIsNewCard] = useState('hide');

  return (
    <div className='app'>
      <header>
          <h1 className='app-name'>To Do App <FaListCheck /></h1>
          <select name='toDo-types' id='toDo-types'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='unfinished'>Unfinished</option>
          </select>
      </header>
      <main>
        <ToDoList todos={todos} />
      </main>
      <footer>
        <SiAddthis onClick={()=>(setIsNewCard(''))} className='add-new-card-btn'/>
      </footer>
      <NewToDoCard active={isNewCard} changeActive={setIsNewCard} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
