import { Component } from 'react'

export default class CCChild extends Component {

  btnSendD2P = () => {
    this.props.sendData2Parent(7);
  }

  render() {
    return (
      <div>
        <h3>Child</h3>
        <button onClick={this.btnSendD2P} >send d 2 p</button>
      </div>
    )
  }
}
