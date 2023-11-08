import NewToDoCard from './NewToDoCard/NewToDoCard';
import ToDoList from './ToDoList/ToDoList';
import './App.css';
import { SiAddthis } from 'react-icons/si';
import { FaListCheck } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [itmTodos, setItmTodos] = useState([]);
  const [option, setOption] = useState('all');
  const [isNewCard, setIsNewCard] = useState('hide');

  useEffect(()=>{
    getLocalStorage();
  }, []);

  useEffect(()=>{
    optionHandler();
    setLocalStorage();
  }, [todos, option]);

  const optionHandler = () => {
    switch (option) {
      case "all":
        setItmTodos([...todos]);
        break;
      case "completed":
        setItmTodos(todos.filter((item)=>item.completed));
        break;
      case "unfinished":
        setItmTodos(todos.filter((item)=>!item.completed));
        break;
    }
  }

  const setLocalStorage = () => { 
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", "[]");
    }
    else { 
      let oldTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(oldTodos);
      console.log(todos);
      console.log(oldTodos);
    }
  }

  return (
    <div className='app'>
      <header>
          <h1 className='app-name'>To Do App <FaListCheck /></h1>
          <select onChange={(e)=>setOption(e.target.value)} name='toDo-types' id='toDo-types'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='unfinished'>Unfinished</option>
          </select>
      </header>
      <main>
        <ToDoList todos={itmTodos} setTodos={setTodos} />
      </main>
      <footer>
        <SiAddthis onClick={()=>(setIsNewCard(''))} className='add-new-card-btn'/>
      </footer>
      <NewToDoCard active={isNewCard} changeActive={setIsNewCard} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
