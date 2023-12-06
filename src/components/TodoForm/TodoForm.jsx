import React, { useState } from 'react';
import './TodoForm.scss';


const TodoForm = (props) => {
    const { edit, onSubmit, editMode, placeholder } = props
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editMode) {
            onSubmit({
                id: edit.id,
                text: input,
            });
        } else {
            onSubmit({
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
                placeholder={placeholder}
                value={input}
                name="text"
                onChange={handleChange}
            />
            <button className='form__button' type="submit">
                {editMode ? 'Edit' : 'Add'}
            </button>
        </form>
    );
};

export default TodoForm;