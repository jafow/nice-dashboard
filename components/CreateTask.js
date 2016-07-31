import React, { Component } from 'react'

class CreateTask extends Component {
  constructor() {
    super()
    this.addTask = this.addTask.bind(this)
  }
  addTask() {
    console.log('here a thing ', this.taskName.value)
  }
  render() {
    return (
        <div className={"display-panel tasks"}>
          <h2>Create A New Task</h2>
          <input type="text" ref={(node) => this.taskName = node} placeholder="Task Name"/>
          <button onClick={this.addTask}>Create!</button>
        </div>
        )
  }
}


export default CreateTask
