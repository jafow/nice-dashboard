import React, { Component } from 'react'
import { render } from 'react-dom'
import Dial from './components/Dial.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      percent: 25
    }
  }

  render () {
    return (
        <div>
          <Dial percent={this.state.percent} />
        </div>
        )
  }
}




render(<App/>, document.getElementById('app'))
