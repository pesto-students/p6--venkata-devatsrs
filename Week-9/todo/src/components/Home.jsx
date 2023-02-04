import React from 'react';
import './Style.css';

const Home = () => {
    const [todos, setTodos] = React.useState([]);

    return (
        <div>
            <h1>Create a Todo</h1>
            <Form setTodos={setTodos} />
            <Todo todos={todos} setTodos={setTodos} />
        </div>
    );
};


const Todo = ({ todos, setTodos }) => {

    const [completedTodos, setCompletedTodos] = React.useState([]);

    const makeUncomplete = (e) => {
        const index = e.target.name.split("-")[1];
        const newTodo = completedTodos.splice(index, 1);
        setTodos((prev) => [...prev, newTodo]);
        setCompletedTodos([...completedTodos]);
    }

    const makeComplete = (e) => {
        e.target.checked = false;
        const index = e.target.name.split("-")[1];
        const newTodo = todos.splice(index, 1);
        setCompletedTodos((prev) => [...prev, newTodo]);
        setTodos([...todos]);
    }


    return (
        <>
            {todos.length > 0 && (
                <div className='todoList'>
                    <h2>Pending</h2>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}><input name={"item-" + index} id={"item-" + index} type="checkbox" className='' onChange={makeComplete} /><label htmlFor={"item-" + index} >{todo}</label></li>
                        ))}
                    </ul>
                </div>
            )}


            {completedTodos.length > 0 && (
                <div className='todoList'>
                    <h2>Completed</h2>
                    <ul>
                        {completedTodos.map((todo, index) => (
                            <li key={index}><input name={"item-" + index} id={"item-" + index} type="checkbox" checked onChange={makeUncomplete} /><label htmlFor={"item-" + index} >{todo}</label></li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

const Form = ({ setTodos }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = e.target[0].value;
        
        if(todo === "") return alert("Please enter a todo");

        // console.log(e.target[0].value);
        setTodos((prev) => [...prev, todo]);
        e.target[0].value = ""

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className='createTodo' placeholder='Enter your todo' />
            </form>
        </>
    );
};




export default Home;
