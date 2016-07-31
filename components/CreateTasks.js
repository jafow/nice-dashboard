import React, { Component } from 'react'

class TaskPanel extends Component {
  render() {
    return (
        <div className={"display-panel tasks"}>
          <h2>Create A New Task</h2>
          <input type="text" ref={(node) => this.taskName = node} placeholder="Task Name"/>
          <input type="text" ref={(node) => this.taskDescription = node} placeholder="Descriptition"/>
          <button onClick={this.props.addTask}>Create!</button>
        </div>
        )
  }
}


export default TaskPanel
