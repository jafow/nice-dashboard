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

  addTask(task) {
    this.setState({tasks: [...this.state.tasks, task]})
  }
  render () {
    var inProgressHeader = "Tasks In Progress"
    var completedHeader = "Tasks Completed"
    var lastTask = this.state.tasks.length ? this.state.tasks[this.state.tasks.length - 1] : ''
    if (!lastTask) lastTask = {}, lastTask.name = ''
    return (
        <div>
          <DialPanel dials={this.state.dials}/>
          <CreateTask addTask={this.addTask}/>
          <TaskPanel title={inProgressHeader} tasks={this.state.tasks}/>
          <TaskPanel title={completedHeader}/>
        </div>
        )
  }
}




render(<App/>, document.getElementById('app'))
