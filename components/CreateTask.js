import React, { Component } from 'react'

class CreateTask extends Component {
  constructor() {
    super()
    // this.addTask = this.addTask.bind(this)
    this.name = ''
  }
  // addTask() {
    // console.log('here a thing ', this.refs)
  // }
  render() {
    return (
        <div className={"display-panel tasks"}>
          <h2>Create A New Task</h2>
          <input type="text" ref={(node) => this.name = node} placeholder="Task Name"/>
          <button onClick={this.props.addTask.bind(this, this.name.value)}>Create!</button>
        </div>
        )
  }
}


export default CreateTask
