import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import "./Todo.scss";

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
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo__item complete' : 'todo__item'} key={index}>
            <div className='todo__item-info'key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
                <div className='todo__item-date'>Date Added: {todo.dateAdded}</div>
                <div className='todo__item-status'>Status: {todo.status}</div>
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