import { Component } from "react";

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num = 7;
    this.age = 50;
    this.speed = this.props.speed + 5;

    this.state = {
      speed: this.props.speed + 7,
      color: 'red'
    };

  }

  btnAddSpeed = () => {
    // console.log(this.speed);
    // this.speed += 5;
    // console.log(this.speed);

    //this.state.speed = 500; //ERROR!
    console.log(this.state.speed);
    //this.setState({ speed: this.state.speed + 1 });
    this.setState(prevS => ({ speed: prevS.speed + 1 }));
    console.log(this.state.speed);
    //code...
  }


  render() {

    console.log('render', this.state.speed);


    return (
      <div>
        <h3>Car</h3>
        model = {this.props.model} <br />
        speed = {this.state.speed} <br />
        {this.age} <br />
        <button onClick={this.btnAddSpeed}>Accelerate</button>
      </div>
    );
  }
}