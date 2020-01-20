import React from 'react';
import './App.css';
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    tasks: [
      { title: "JS", isDone: true, priority: "low" },
      { title: "HTML", isDone: true, priority: "high" },
      { title: "CSS", isDone: true, priority: "medium" },
      { title: "React", isDone: false, priority: "high" }
    ],
    filterValue: "All"
  }
  
  changeFilter = (newFilterValue) => {
    this.setState({
      filterValue: newFilterValue
    });
  }

  addTask = (newText) => {
    let newTask = { title: newText, isDone: false, priority: "low" }
    let newTasks = [...this.state.tasks, newTask]
    this.setState({
      tasks: newTasks,
    });
  }

  changeStatus = (task, isDone) => {
    let newTasks = this.state.tasks.map(t => {
      if (t !== task) {
        return t;
      } else {
        return {...t, isDone: isDone}
      }
    });

    this.setState({
      tasks: newTasks
    });
  }

  render = () => {
    return (
      <div className="App">
        <div className="todoList">
          <TodoListHeader addTask={this.addTask}/>
          <TodoListTasks changeStatus={this.changeStatus}
          
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

