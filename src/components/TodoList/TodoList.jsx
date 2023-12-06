import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = () => {

    useEffect(() => {
        const todolist = localStorage.getItem("todos")
        if (todolist) {
            setTodos(JSON.parse(todolist))
        }
    }, []);


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
        localStorage.setItem('todos', JSON.stringify(newTodos))
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
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => todo.id !== id)
        setTodos(removeArr);
        localStorage.setItem("todos", JSON.stringify(removeArr))
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos((prev) => {
            const updatedTodos = prev.map((item) =>
                item.id === todoId ? { ...item, ...newValue } : item
            );

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return updatedTodos;
        });


    };

    return (
        <div className='list'>
            <h1 className='list__heading'>TODO LIST</h1>
            <TodoForm onSubmit={addTodo} placeholder={"Add your task"} />
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