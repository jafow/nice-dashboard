import React, { Component } from 'react'
import { render } from 'react-dom'
import CreateTask from './components/CreateTask.js'
import DialPanel from './components/DialPanel.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dials: [25, 15, 44],
    }
    this.addTask = this.addTask.bind(this)
  }

  addTask(e, tt) {
    // add a task
  }
  render () {
    return (
        <div>
          <DialPanel dials={this.state.dials} />
          <CreateTask addTask={this.addTask}/> 
        </div>
        )
  }
}




render(<App/>, document.getElementById('app'))
