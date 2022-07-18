import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalActive: false };
    this.modalSwitch = this.modalSwitch.bind(this);
  }

  modalSwitch() {
    if (this.state.modalActive === false) {
      this.setState({ modalActive: true });
    } else if (this.state.modalActive === true) {
      this.setState({ modalActive: false });
    }
  }

  render() {
    if (this.state.modalActive === false) {
      return (
        <div className="container">
          <div className="menu"><i className='fa-solid fa-bars' onClick={this.modalSwitch}></i></div>
          <div className="heroimg">
            <img src="../assets/shrek.png" alt="shrek" />
          </div>
        </div>
      );
    } else if (this.state.modalActive === true) {
      return (
        <div className="container">
          <div className="modal">
            <div className="mainbg" onClick={this.modalSwitch}></div>
            <div className="menu"><h1>Choose a Shrek</h1>
              <div className="links">
                <p onClick={this.modalSwitch}>OG Shrek</p>
                <p onClick={this.modalSwitch}>Shrekwazowski</p>
                <p onClick={this.modalSwitch}>Pepe Shrek</p>
                <p onClick={this.modalSwitch}>Kermit Shrek</p>
                <p onClick={this.modalSwitch}>Stranger Shrek</p>
              </div>
            </div>
          </div>
          <div className="menu"><i className='fa-solid fa-bars'></i></div>
          <div className="heroimg">
            <img src="../assets/shrek.png" alt="shrek" />
          </div>
        </div>
      );
    }
  }
}

export default AppDrawer;
