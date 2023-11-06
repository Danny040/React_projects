import './NewToDoCard.css';
import { Form, Button } from 'react-bootstrap';
import { FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function NewToDoCard({ active, changeActive, todos, setTodos }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('There is no description.');
    const toDoId = uuidv4();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescChange = (e) => {
        setDescription(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {name: name, description: description, id: toDoId, completed: false}]);
        changeActive('hide');
        setName('');
        setDescription('There is no description.');
    };
    return (
        <div className={`new-card ${active}`}>
        <Form className='to-do-card' onSubmit={submitHandler}>
            <div className='close-btn'>
                <FaWindowClose onClick={()=>{changeActive('hide')}} />
            </div>
            <Form.Group className='form-group'>
                <Form.Label className='from-label'>
                    Name:
                </Form.Label>
                <Form.Control value={name} onChange={handleNameChange} type='text' placeholder='Name' required />
            </Form.Group>
            <Form.Group className='form-group'>
                <Form.Label className='from-label'>
                    Description:
                </Form.Label>
                <Form.Control value={description} onChange={handleDescChange} as="textarea" placeholder='Description' rows={4} className='text-area' />
            </Form.Group>
            <div className='btn'>
                <Button type='submit' className='add-btn' >
                    Add
                </Button>
            </div>
        </Form>
        </div>
    );
}

export default NewToDoCard;