import React from 'react';
import './App.css';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";

class App extends React.Component {
  tasks = [
    {title: "JS", isDone: true, priority: "low"},
    {title: "HTML", isDone: true, priority: "high"},
    {title: "CSS", isDone: true, priority: "medium"},
    {title: "React", isDone: false, priority: "high"}
  ];

  filterValue = {
    active: "Active",
    all: "All",
    completed: "Completed"
  };

  render = () => {

    return (
      <div className="App">
        <div className="todoList">
          <TodoListHeader/>
          <TodoListTasks tasks={this.tasks}/>
          <TodoListFooter filterValue={this.filterValue.active}/>
        </div>
      </div>
    );
  }
}

export default App;

