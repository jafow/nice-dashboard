import React, { Component } from 'react'
import Dial from './Dial.js'


class DialPanel extends Component {
  render() {
    return (
        <div className={"display-panel"}>
          {this.props.dials.map((dial, i) =>
              <Dial
              percent={this.props.dials[i]}
              key={i}
              />
              )}
          </div>
        )
  }
}

export default DialPanel
