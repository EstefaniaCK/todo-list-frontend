import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodo = {
            ...todo,
            id: new Date().getTime(),
            dateAdded: new Date().toLocaleDateString(),
            status: 'pending',
        };

        const newTodos = [newTodo, ...todos]

        setTodos(newTodos);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.status = todo.status === 'pending' ? 'completed' : 'pending';
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => todo.id !== id)
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos((prev) =>
            prev.map((item) =>
                item.id === todoId ? { ...newValue, dateAdded: item.dateAdded, status: item.status } : item
            ));

    };

    return (
        <div className='list'>
            <h1 className='list__heading'>TODO LIST</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
};

export default TodoList;