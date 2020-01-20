import React from 'react';
import './TodoListHeader.css'

class TodoListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.newTaskTitleRef = React.createRef();
  }

  state = {
    error: false
  }

  onAddTaskClick = () => {
    let newText = this.newTaskTitleRef.current.value
    if (newText === ""){
      this.setState({
        error: true
      })

    } else {
      this.setState({
        error: false
      })
      this.props.addTask(newText);
      this.newTaskTitleRef.current.value = "";
    }
  }

  onInputChange = () => {
    this.setState({
      error: false
    })
  }

  render = () => {
    let classForInput = this.state.error === true ? "error" : ""

    return(
      <div className="todoList-header">
        <h3 className="todoList-header__title">What to Learn</h3>
        <div className="todoList-newTaskForm">
          <input ref={this.newTaskTitleRef} 
                 type="text" 
                 placeholder="New task name"
                 className={classForInput}
                 onChange={this.onInputChange}
          />
          <button onClick={this.onAddTaskClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoListHeader;