import React, { useState } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.random(),
            text: input
        })

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
            <button className='form__button' type="submit">Add</button>
        </form>
    );
};

export default TodoForm;