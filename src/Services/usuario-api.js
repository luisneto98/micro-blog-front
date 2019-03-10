import {http} from './http'

class UsuarioApi {
    authenticate(usuario){
        return http.post(`usuario/authenticate`,usuario);
    }
    cadastro(usuario){
        return http.post(`usuario/register`,usuario);
    }
}
const api = new UsuarioApi();

export default api;