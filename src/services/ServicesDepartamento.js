import Global from "@/Global";
import axios from "axios";

export default class ServicesDepartamento{

    getDepartamentos(){
        return new Promise(function(resolve){
            let urlApi=Global.urlApiDepartamento
            let request="api/Departamentos"
            let departamentos=[]

            axios.get(urlApi+request).then((response)=>{
                departamentos=response.data
                resolve(departamentos)
            })
        })
    }
    getDepartamentoById(id){
        return new Promise(function(resolve){
            let urlApi=Global.urlApiDepartamento
            let request="api/Departamentos/"+id
            let departamento=[]

            axios.get(urlApi+request).then((response)=>{
                departamento=response.data
                resolve(departamento)
            })
        })
    }

    createDepartamento(departamento){
        return new Promise(function(resolve){
            let urlApi=Global.urlApiDepartamento
            let request="api/Departamentos"

            resolve(departamento)

            axios.post(urlApi+request,departamento).then((response)=>{

                resolve(response)
            })
        })

    }
    editDepartamento(departamento){
        return new Promise(function(resolve){
            let urlApi=Global.urlApiDepartamento
            let request="api/Departamentos"

            axios.put(urlApi+request,departamento).then((response)=>{

                resolve(response)
            })
        })
    }

    deleteDepartamento(id){
        return new Promise(function(resolve){
            let urlApi=Global.urlApiDepartamento
            let request="api/Departamentos/"+id

            axios.delete(urlApi+request).then((response)=>{
                    resolve(response)
            })
        })
    }
}