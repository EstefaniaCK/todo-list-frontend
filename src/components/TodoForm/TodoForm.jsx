import React, { useState } from 'react';
import './TodoForm.scss';


const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.editMode) {
            props.onSubmit({
                id: props.edit.id,
                text: input,
            });
        } else {
            props.onSubmit({
                id: Math.random(),
                text: input
            })
        }

        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                className='form__input'
                type="text"
                placeholder='Add your task'
                value={input}
                name="text"
                onChange={handleChange}
            />
            <button className='form__button' type="submit">
                {props.editMode ? 'Edit' : 'Add'}
            </button>
        </form>
    );
};

export default TodoForm;