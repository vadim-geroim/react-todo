import React from 'react';
import './App.css';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    tasks: [
      // { id: 0, title: "JS", isDone: true, priority: "low" },
      // { id: 1, title: "HTML", isDone: true, priority: "high" },
      // { id: 2, title: "CSS", isDone: true, priority: "medium" },
      // { id: 3, title: "React", isDone: false, priority: "high" }
    ],
    filterValue: "All",
    nextTaskId: 0
  }

  componentDidMount() {
    this.restoreState();
  }

  saveState = () => {
    // obj to string
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem("our-state", stateAsString);
  }

  restoreState = () => {
    // update state
    let state = {
      tasks: [],
      filterValue: "All",
      nextTaskId: 0
    };

    let stateAsString = localStorage.getItem("our-state");
    if (stateAsString != null) {
      state = JSON.parse(stateAsString);
    }
    this.setState(state);
  }
  
  changeFilter = (newFilterValue) => {
    this.setState({
      filterValue: newFilterValue
    });
  }

  addTask = (newText) => {
    let newTask = { id: this.state.nextTaskId, title: newText, isDone: false, priority: "low" }
    let newTasks = [...this.state.tasks, newTask]
    
    this.setState({
      tasks: newTasks,
      nextTaskId: this.state.nextTaskId + 1
    }, () => { this.saveState(); });
    
  }

  changeTask = (taskId, obj) => {
    let newTasks = this.state.tasks.map(t => {
      if (t.id !== taskId) {
        return t;
      } else {
        return {...t, ...obj}
      }
    });

    this.setState({
      tasks: newTasks
    });
  }

  changeStatus = (taskId, isDone) => {
    this.changeTask(taskId, {isDone: isDone})
  }

  changeTaskTitle = (taskId, textTitle) => {
    this.changeTask(taskId, {title: textTitle})
  }

  render = () => {
    return (
      <div className="App">
        <div className="todoList">
          <TodoListHeader addTask={this.addTask}/>
          <TodoListTasks 
          changeStatus={this.changeStatus}
          changeTaskTitle={this.changeTaskTitle}
          
          tasks={this.state.tasks.filter(t => {
              if (this.state.filterValue === "All") {
                return true;
              }
              if (this.state.filterValue === "Completed") {
                return t.isDone === true;
              }
              if (this.state.filterValue === "Active") {
                return t.isDone === false;
              }
          })} />
          <TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  filterValue: PropTypes.array
};

