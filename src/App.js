import React from 'react';
import './App.css';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.newTaskTitleRef = React.createRef();
    setTimeout(() => {
      let newTasks = [...this.state.tasks, { title: "Angular", isDone: false, priority: "low" }]
      this.setState({
        tasks: newTasks,
        filterValue: "Completed"
      });
    }, 2000);
  }
  state = {
    tasks: [
      { title: "JS", isDone: true, priority: "low" },
      { title: "HTML", isDone: true, priority: "high" },
      { title: "CSS", isDone: true, priority: "medium" },
      { title: "React", isDone: false, priority: "high" }
    ],
    // Active, All, Completed
    filterValue: "All"
  }

  onAddTaskClick = () => {
    let newText = this.newTaskTitleRef.current.value
    let newTask = { title: newText, isDone: false, priority: "low" }
    let newTasks = [...this.state.tasks, newTask]
    this.setState({
      tasks: newTasks,
      filterValue: "All"
    });
    this.newTaskTitleRef.current.value = "";
  }

  render = () => {

    return (
      <div className="App">
        <div className="todoList">
          {/* <TodoListHeader/> */}
          <div className="todoList-header">
            <h3 className="todoList-header__title">What to Learn</h3>
            <div className="todoList-newTaskForm">
              <input ref={this.newTaskTitleRef} type="text" placeholder="New task name" />
              <button onClick={this.onAddTaskClick}>Add</button>
            </div>
          </div>
          <TodoListTasks tasks={this.state.tasks} />
          <TodoListFooter filterValue={this.state.filterValue} />
        </div>
      </div>
    );
  }
}

export default App;

