import React, { Component } from 'react';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Container from './Layout/Container';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
