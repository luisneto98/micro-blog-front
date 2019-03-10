import {http} from './http'

class NweetApi {
    listAll(){
        return http.get(`nweet/listAll`);
    }
    submit(texto,token){
        const header = {Authorization: `Bearer ${token}`};
        return http.post(`nweet/submit`, { texto }, { headers:  header });
    }
}
const api = new NweetApi();

export default api;