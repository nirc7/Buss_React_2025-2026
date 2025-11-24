import { Component } from 'react';
import CCChild from './CCChild';

export default class CCParent extends Component {

  getDataFromChild = (data) => {
    console.log('in parnet', data);
  }

  render() {
    return (
      <div>
        <h3>Parent</h3>
        <CCChild sendData2Parent={this.getDataFromChild} />
      </div>
    )
  }
}
