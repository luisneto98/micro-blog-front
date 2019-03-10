import React, { Component } from 'react';
import usuarioApi from './../../Services/usuario-api';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apelido: "",
            senha: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeApelido= this.handleChangeApelido.bind(this);
        this.handleChangeSenha = this.handleChangeSenha.bind(this);

    }

    handleChangeApelido(event){
        this.setState({apelido: event.target.value})
    }
    handleChangeSenha(event){
        this.setState({senha: event.target.value})
    }
    async handleSubmit(event){
        event.preventDefault();
        const usuario = {
            nickname: this.state.apelido,
            senha: this.state.senha
        }
        const response = await usuarioApi.authenticate(usuario);
        console.log(response);
        if(response.data.token != null){
            const usuarioLogin = {
                loggedin: true,
                nome: response.data.usuario.nome,
                email: response.data.usuario.email, 
                nickname: this.state.apelido,
                senha: this.state.senha,
                token: response.data.token
            }
            this.props.login(usuarioLogin);
        }
        console.log(this.state.senha);
    }
    render() { 
        return ( 
            <form className="form-group form-inline" onSubmit={this.handleSubmit}>
                <div className="form-control-sm text-white">
                    <input type="text" name="apelido" placeholder="Apelido" onChange={this.handleChangeApelido} value={this.state.apelido}/>
                </div>
                <div className="form-control-sm text-white">
                    <input type="text" name="senha" placeholder="Senha" onChange={this.handleChangeSenha} value={this.state.senha}/>
                </div>
                <input className="btn btn-primary btn-sm" type="submit" value="Submit" />
            </form>
        );
    }
}
 
export default login;