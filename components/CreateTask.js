import React, { Component } from 'react'

class CreateTask extends Component {
  constructor() {
    super()
    // this.addTask = this.addTask.bind(this)
    this.name = ''
    this.newTaskName = this.newTaskName.bind(this)
  }
  newTaskName () {
    var name = this.name.value
    if (!name) return
    console.log('here a thing ', name)
  }
  render() {
    return (
        <div className={"display-panel tasks"}>
          <h2>Create A BLUE Task</h2>
          <input type="text" ref={(node) => this.name = node} placeholder="Task Name"/>
          <button onClick={this.newTaskName}>Create!</button>
        </div>
        )
  }
}


export default CreateTask
