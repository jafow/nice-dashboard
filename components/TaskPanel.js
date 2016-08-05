import React, { Component } from 'react'
import Task from './Task.js'


class TaskPanel extends Component {
  render() {
    if (this.props.tasks) {
      var tasks = this.props.tasks.map((task, i) =>
          <Task
          name={task.name}
          description={task.description}
          key={i}
          />
          )
    } 
    return (
        <div>
          <h2>{this.props.title}</h2>
          <div className={"display-panel"}>
            <ul>
              { tasks }
            </ul>
          </div>
        </div>
        )
  }
}

export default TaskPanel
