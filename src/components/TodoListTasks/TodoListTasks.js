import React from 'react';
import TodoListTask from "./TodoListTask/TodoListTask";

class TodoListTasks extends React.Component {
  render = () => {
    let tasksElements = this.props.tasks.map((t, index) => <TodoListTask key={index} changeStatus={this.props.changeStatus} task={t}/>);

    return (
      <div className="todoList-tasks">
        {tasksElements}
      </div>
    );
  }
}

export default TodoListTasks;