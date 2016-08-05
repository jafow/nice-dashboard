import React, { Component } from 'react'
import Task from './Task.js'


class TaskPanel extends Component {
  render() {
    // render completed tasks in Completed panel, pending tasks in pending
    var tasks
    if (/progress/.test(this.props.tile)) {
      tasks = this.props.tasks.filter((task, i) => {
        if (!task.isComplete) {
          return (
              <Task
          name={task.name}
          description={task.description}
          key={i}
          />
          )}
      })
    } else {
      tasks = this.props.tasks.filter((task, i) => {
        if (task.isComplete) {
          return (
              <Task
          name={task.name}
          description={task.description}
          key={i}
          />
          )}
      })
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
