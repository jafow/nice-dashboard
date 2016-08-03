import React, { Component } from 'react'
import Task from './Task.js'


class TaskPanel extends Component {
  render() {
    return (
        <div>
          <h2>Tasks In Progress</h2>
          <div className={"display-panel"}>
            <ul>
            {this.props.tasks.map((task, i) =>
                <Task
                name={task.name}
                description={task.description}
                key={i}
                />
                )}
            </ul>
          </div>
        </div>
        )
  }
}

export default TaskPanel
