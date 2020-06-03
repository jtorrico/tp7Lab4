import axios from 'axios'

class ProductoService {
    
    getAll(){
        return axios.get("http://localhost:9000/api/v1/instrumentos/");
    }

    getById(id){
        return axios.get("http://localhost:9000/api/v1/instrumentos/" + id);
    }

    post(data){
        return axios.post("http://localhost:9000/api/v1/instrumentos/", data);
    }

    put(id, data){
        return axios.put(`http://localhost:9000/api/v1/instrumentos/${id}`, data);
    }

    delete(id){
        return axios.delete("http://localhost:9000/api/v1/instrumentos/" + id);
    }
}

export default new ProductoService();