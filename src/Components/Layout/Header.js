import React, { Component } from 'react';
import usuarioApi from './../../Services/usuario-api';
import Login from './../Form/Login'

class Header extends Component {
    
    constructor(props){
        super(props);
    }

    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-light bg-dark">
                    <div className="navbar-brand text-primary font-weight-bold">NWEET</div>
                    {!this.props.loggedin && <Login {...this.props}></Login>}
                    {this.props.loggedin && <h4 className="text-white">{this.props.nome}</h4>}
                </nav>

            </div>
        );
    }
}
 
export default Header;