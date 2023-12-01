import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';

const TodoList = () => {

    const [tasks, setTasks] = useState([]);

    return (
        <div>
            <h1>Today's Tasks</h1>
            <TodoForm />
        </div>
    );
};

export default TodoList;