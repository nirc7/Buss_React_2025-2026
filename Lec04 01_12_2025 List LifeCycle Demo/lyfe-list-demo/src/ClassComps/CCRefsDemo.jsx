import React, { Component } from 'react'

export default class CCRefsDemo extends Component {
  constructor(props) {
    super(props);

    this.txtInput1;
    this.textInput2 = React.createRef();

  }

  chgTxt22 = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  chgTxt11 = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  chgTxt = () => {
    this.setState({
      txt1: this.txtInput1.value,
      txt2: this.textInput2.current.value
    })
  }

  chgTxt1 = (e) => {
    this.setState({ txt1: e.target.value })
  }

  chgTxt2 = (e) => {
    this.setState({ txt2: e.target.value })
  }

  render() {
    return (

      <div>

        <div>
          txt1:<input type="text" name="txt1"
            onChange={this.chgTxt11} /> <br />
          txt1={this.state && this.state.txt1} <br />

          txt2:<input type="text" name="txt2"
            onChange={this.chgTxt22} /> <br />
          txt2={this.state && this.state.txt2} <br />
        </div>

        <br /><br />

        <div>
          txt1:<input type="text"
            ref={ref => this.txtInput1 = ref}
            onChange={this.chgTxt} /> <br />
          txt1={this.state && this.state.txt1} <br />

          txt2:<input type="text"
            ref={this.textInput2}
            onChange={this.chgTxt} /> <br />
          txt2={this.state && this.state.txt2} <br />
        </div>

        <button onClick={() => this.txtInput1.focus()} >set focus</button>
        <br /><br />

        <div>
          txt1:<input type="text"
            onChange={this.chgTxt1} /> <br />
          txt1={this.state && this.state.txt1} <br />

          txt2:<input type="text"
            onChange={this.chgTxt2} /> <br />
          txt2={this.state && this.state.txt2} <br />
        </div>
      </div>
    )
  }
}
