import React from 'react';
import './App.css';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks />
                    <TodoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

