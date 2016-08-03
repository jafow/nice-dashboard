import React from 'react'

const Task = (props) => (
    <li className="task">
      <p>Name: {props.name}</p>
      <p>Description: {props.description}</p>
    </li>
    )

export default Task
