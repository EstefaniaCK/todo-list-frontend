import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import './Todo.scss';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });

    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} editMode={true} placeholder={"Edit your task"} />;
    }

    return todos.map((todo, index) => (
        <div className='todo' key={index}>
            <div className='todo__item'
                key={todo.id} onClick={() => completeTodo(todo.id)}>
                <span className='todo__item-description'>Description:<p className='todo__item-description'>{todo.text}</p></span>
                <span className='todo__item-date'>Date: <p>{todo.dateAdded}</p></span>
                <span className='todo__item-status'>Status: <p>{todo.status}</p></span>
            </div>
            <div className='todo__item-icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='todo__item-icons delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='todo__item-icons edit-icon'
                />

            </div>
        </div >
    ))

};

export default Todo;