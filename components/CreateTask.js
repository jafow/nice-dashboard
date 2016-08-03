import React, { Component } from 'react'

class CreateTask extends Component {
  constructor(props) {
    super(props)
    this.name
    this.description
    this.newTaskName = this.newTaskName.bind(this)
  }
  newTaskName () {
    var name = this.name
    var description = this.description
    var task = {name: name.value, description: description.value}
    this.clearInput(name, description)
    return this.props.addTask(task)
  }
  clearInput (...nodes) {
   nodes.forEach(node => node.value = null)
  }
  render() {
    return (
        <div className={"display-panel tasks"}>
          <h2>Create A BLUE Task</h2>
          <p>Task Name</p>
          <input type="text" ref={(node) => this.name = node} placeholder="Task Name"/>
          <p>Description</p>
          <input type="text" ref={(node) => this.description = node} placeholder="Description"/>
          <button onClick={this.newTaskName}>Create!</button>
        </div>
        )
  }
}


export default CreateTask
