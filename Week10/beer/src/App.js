import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import State from './components/State';

class App extends Component {
  constructor() {
    super()

    this.state = {
      click: 'home'
    }
  }

  onClickHome = (clickButton) => {
    this.setState({
      click: clickButton
    })
  }

  onClickSearch = (clickButton) => {
    this.setState({
      click: clickButton
    })
  }

  render() {
    return (
      <div>
        <Header onClickHome={this.onClickHome} onClickSearch={this.onClickSearch}/>
        {this.state.click === 'home' ? <Main /> : <State />}
        <Footer />
      </div>
    )
  }
}

export default App;
