import React, { Component } from 'react'
import { render } from 'react-dom'
import CreateTask from './components/CreateTask.js'
import TaskPanel from './components/TaskPanel.js'
import DialPanel from './components/DialPanel.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      dials: [25, 15, 44],
    }
    this.addTask = this.addTask.bind(this)
  }

  addTask(name) {
    console.log('adding a task name:', name)
    this.setState({tasks: [...this.state.tasks, {name: name}]})
  }
  render () {
    var lastTask = this.state.tasks.length ? this.state.tasks[this.state.tasks.length - 1] : ''
    if (!lastTask) lastTask = {}, lastTask.name = ''
    return (
        <div>
          <DialPanel dials={this.state.dials}/>
          <CreateTask addTask={this.addTask}/>
          <TaskPanel tasks={this.state.tasks}/>
        </div>
        )
  }
}




render(<App/>, document.getElementById('app'))
