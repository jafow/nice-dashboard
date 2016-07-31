import React, { Component } from 'react'
import { render } from 'react-dom'

import DialPanel from './components/DialPanel.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dials: [25, 15, 44],
    }
  }

  render () {
    return (
        <div>
          <DialPanel dials={this.state.dials} />
        </div>
        )
  }
}




render(<App/>, document.getElementById('app'))
