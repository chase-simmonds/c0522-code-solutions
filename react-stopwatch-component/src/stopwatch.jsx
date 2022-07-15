import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      active: false
    };
    this.timerClick = this.timerClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  timerClick() {
    if (this.state.active === false) {
      this.setState({ active: true });
      this.timerId = setInterval(() =>
        this.setState({ timer: this.state.timer + 1 }), 1000);
    } else {
      this.setState({ active: false });
      clearInterval(this.timerId);
    }
  }

  resetTimer() {
    this.setState({ timer: 0 });
  }

  render() {
    if (this.state.active === false) {
      return (
        <div className="row">
          <div className="circle" onClick={this.resetTimer}>{this.state.timer}</div>
          <div><i className='fa-solid fa-play' onClick={this.timerClick}></i></div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="circle">{this.state.timer}</div>
          <div><i className='fa-solid fa-pause' onClick={this.timerClick}></i></div>
        </div>
      );
    }
  }
}

export default StopWatch;
