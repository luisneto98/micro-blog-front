import React, { Component } from 'react';
import usuarioApi from './../../Services/usuario-api';
import nweetApi from './../../Services/nweet-api';

class Container extends Component {
    
    componentDidMount(){
    }

    render() { 
        return (
            <main rola="main">
                <h1>{this.props.nome}</h1>
            </main>
        );
    }
}
 
export default Container;