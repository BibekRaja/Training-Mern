import React, { useState } from 'react'

export default function TodoList() {

    // let todos = []
    // todos = ['task', 'task-2']

    const [todos, setTodo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.task.value);
        // todos.push(e.target.task.value)
        // console.log(todos);

        let temp = [...todos]
        temp.push(e.target.task.value)
        // console.log(temp);
        setTodo(temp)


    }
    console.log("render");
    return (
        <div>
            <h1>TodoList</h1>
            <form onSubmit={handleSubmit}>
                <input name='task' />
                <button >add</button>

            </form>
            <hr />
            <ul>
                {
                    todos.map((todo, index) => {
                        return <li key={todo}>{todo}</li>
                    })
                }

            </ul>

        </div>
    )
}
