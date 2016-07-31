import React, { Component } from 'react'

class CreateTask extends Component {
  addTask() {
    console.log('name is ', this.taskName.value)
  }
  render() {
    return (
        <div className={"display-panel tasks"}>
          <h2>Create A New Task</h2>
          <input type="text" ref={(node) => this.taskName = node} placeholder="Task Name"/>
          <input type="text" ref={(node) => this.taskDescription = node} placeholder="Descriptition"/>
          <button onClick={this.addTask}>Create!</button>
        </div>
        )
  }
}


export default CreateTask
