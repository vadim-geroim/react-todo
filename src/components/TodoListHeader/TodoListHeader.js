import React from 'react';
import './TodoListHeader.css'

class TodoListHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    error: false,
    title: ""
  }

  onAddTaskClick = () => {
    let newText = this.state.title
    if (newText === ""){
      this.setState({
        error: true
      })

    } else {
      this.setState({
        error: false,
        title: ""
      })
      this.props.addTask(newText);
    }
  }

  onInputChange = (e) => {
    this.setState({
      error: false,
      title: e.currentTarget.value
    })
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onAddTaskClick()
    }
  }
 
  render = () => {
    let classForInput = this.state.error === true ? "error" : ""

    return(
      <div className="todoList-header">
        <h3 className="todoList-header__title">What to Learn</h3>
        <div className="todoList-newTaskForm">
          <input 
                 type="text" 
                 placeholder="New task name"
                 className={classForInput}
                 onChange={this.onInputChange}
                 onKeyPress={this.onKeyPress}
                 value = {this.state.title}
          />
          <button onClick={this.onAddTaskClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoListHeader;