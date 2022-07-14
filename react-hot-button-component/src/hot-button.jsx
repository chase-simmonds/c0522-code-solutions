import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  }

  render() {
    if (this.state.timesClicked < 4) {
      return (<button className='freeze' onClick={this.handleClick}>Hot Button</button>);
    } else if (this.state.timesClicked < 7) {
      return (<button className="cold" onClick={this.handleClick}>Hot Button</button>);
    } else if (this.state.timesClicked < 10) {
      return <button className="luke" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.timesClicked < 13) {
      return <button className="warm" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.timesClicked < 16) {
      return <button className="hot" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.timesClicked < 19 || this.state.timesClicked >= 19) {
      return <button className="nuclear" onClick={this.handleClick}>Hot Button</button>;
    }
  }
}

export default HotButton;
