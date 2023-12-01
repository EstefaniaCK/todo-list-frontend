import React, { useState } from 'react';

const TodoForm = () => {
    const [input, setInput] = useState('')

    return (
        <form className='form'>
            <input
                className='form__input'
                type="text"
                placeholder='Add your task'
                value={input}
                name="text"
            />
            <button className='form__button'>Add</button>
        </form>
    );
};

export default TodoForm;