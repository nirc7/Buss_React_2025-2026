import { Component } from 'react';
import FCInputs from '../FuncComps/FCInputs';
import FCRes from '../FuncComps/FCRes';
import CCInputs from './CCInputs';

export default class CCClacComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      res: 0
    };
  }

  getResFromChild = (res) => {
    console.log(res);
    this.setState({res}); //res:res
  }

  render() {
    return (
      <div>
        <h3>Calculator</h3>
        <CCInputs sendRes2Parent={this.getResFromChild}/>
        <FCInputs sendRes2Parent={this.getResFromChild} />
        <FCRes result={this.state.res} />
      </div>
    )
  }
}
