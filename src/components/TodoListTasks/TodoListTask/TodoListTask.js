import React from 'react';
import './TodoListTask.css'

class TodoListTask extends React.Component {

  state = {
    editMode: false
  }

  onIsDoneChanged = (e) => {
    this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  onTitleChanged = (e) => {
    this.props.changeTaskTitle(this.props.task.id, e.currentTarget.value)
  }

  render = () => {
    let taskStatus = this.props.task.isDone ? "todoList-task done": "todoList-task"

    return (
      <div className={taskStatus}>
        <input type="checkbox"
               checked={this.props.task.isDone}
               onChange={this.onIsDoneChanged} 
        />
        {this.state.editMode
         ? <input onChange={this.onTitleChanged} onBlur={this.deactivateEditMode} autoFocus={true} value={this.props.task.title}></input>
         :  <span onClick={this.activateEditMode}> 
              {this.props.task.id} - {this.props.task.title}
            </span>
        } ,priority:{this.props.task.priority}
      </div>
    );
  }
}

export default TodoListTask;
