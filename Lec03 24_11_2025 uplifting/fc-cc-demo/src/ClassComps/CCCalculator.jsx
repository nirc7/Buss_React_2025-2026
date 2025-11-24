import { Component } from 'react';

export default class CCCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      res: 0
    };
  }

  chgnum1 = (e) => {
    this.setState({ num1: Number(e.target.value) });
  }

  chgnum2 = (e) => {
    this.setState({ num2: Number(e.target.value) });
  }

  btnAdd = () => {
    this.setState({ res: this.state.num1 + this.state.num2 });
  }

  render() {
    return (
      <div>
        NUM1:<input type="text" onChange={this.chgnum1} /> <br />
        NUM2:<input type="text" onChange={this.chgnum2} /><br />
        <button onClick={this.btnAdd} >+</button> <br />
        res={this.state.res}
      </div>
    )
  }
}
