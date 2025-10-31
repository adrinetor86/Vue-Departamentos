<template>
  <div>
    <h1>Departamentos CRUD</h1>
    <img src="./../../assets/images/loading.png" alt="" v-if="status===false"/>
    <table class="table table-striped ">
      <thead>
      <tr>
        <th>Numero</th>
        <th>Departamento</th>
        <th>Localidad</th>
        <th>Detalles</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="departamento in departamentos" :key="departamento">
        <td>{{ departamento.numero }}</td>
        <td>{{ departamento.nombre }}</td>
        <td>{{ departamento.localidad }}</td>
        <td>
          <router-link :to="'/details/'+departamento.numero+'/'+departamento.nombre+'/'+departamento.localidad"
            class="btn btn-primary">
            Detalles
          </router-link>

          <router-link :to="'/update/'+departamento.numero" class="btn btn-danger">
            Editar
          </router-link>

          <button @click="borrarDepartamento(departamento.numero)" class="btn btn-secondary">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServicesDepartamento from "@/services/ServicesDepartamento";
const service=new ServicesDepartamento();

export default {
  name: "DepartamentosComponent",
  data(){
    return{
      departamentos:[],
      status:false
    }
  },
  methods:{
    borrarDepartamento(id){
      service.deleteDepartamento(id).then(() => {

        //this.$router.push('/');
      })
    }
  },
  mounted(){
    service.getDepartamentos().then(response =>{
    this.departamentos = response;
    this.status=true
    })
  }
}
</script>
<style scoped>

</style>