import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleSwitch: true };
    this.turnOn = this.turnOn.bind(this);
    this.turnOff = this.turnOff.bind(this);
  }

  turnOn() {
    this.setState({ toggleSwitch: true });
  }

  turnOff() {
    this.setState({ toggleSwitch: false });
  }

  render() {
    if (this.state.toggleSwitch === true) {
      return (
        <div className="row">
          <div className="switch-on" onClick={this.turnOff}>
            <div className="circle-on"></div>
          </div>
          <div className="text" onClick={this.turnOff}>ON</div>
        </div>
      );
    } else if (this.state.toggleSwitch === false) {
      return (
        <div className="row">
          <div className="switch-off" onClick={this.turnOn}>
            <div className="circle-off"></div>
          </div>
          <div className="text" onClick={this.turnOn}>OFF</div>
        </div>
      );
    }

  }
}

export default ToggleSwitch;
