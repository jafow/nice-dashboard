import React, { Component } from 'react'
import Task from './Task.js'


class TaskPanel extends Component {
  render() {
    return (
        <div className={"display-panel"}>
          <h2>Tasks In Progress</h2>
          {this.props.tasks.map((task, i) =>
              <Task
              name={task.name}
              description={task.description}
              key={i}
              />
              )}
          </div>
        )
  }
}

export default TaskPanel
