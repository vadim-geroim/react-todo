import React from 'react';
import './TodoListTask.css'

class TodoListTask extends React.Component {

  onIsDoneChanged = (e) => {
    this.props.changeStatus(this.props.task, e.currentTarget.checked);
  }

  render = () => {
    let taskStatus = this.props.task.isDone ? "todoList-task done": "todoList-task"

    return (
      <div className={taskStatus}>
        <input type="checkbox"
               checked={this.props.task.isDone}
               onChange={this.onIsDoneChanged} 
        />
        <span>{this.props.task.title}</span>,
        priority:{this.props.task.priority}
      </div>
    );
  }
}

export default TodoListTask;
