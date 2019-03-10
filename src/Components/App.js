import React, { Component } from 'react';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Container from './Layout/Container';


class App extends Component {
  constructor(){
    super();
    this.state = {
      usuario:{
        loggedin: false,
        nickname: null,
        senha: null,
        token: null,
        email: null,
        nome: null
      }
    }
    this.login = this.login.bind(this);
  }
  login(usuario){
    this.setState({usuario});
    console.log(this.state.usuario)
  }

  render() {
    return (
      <div>
        <Header {...this.state.usuario} login={this.login}></Header>
        <Container {...this.state.usuario}></Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
