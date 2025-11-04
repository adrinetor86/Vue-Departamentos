<template>
  <div>
    <h1>DELETE </h1>
    <h2>Quieres borrar?</h2>

    <button @click="deleteDepartamento" class="btn btn-primary">Si, estoy seguro</button>

    <router-link to="/" class="btn btn-success">Volver</router-link>
  </div>
</template>
<script>

import ServicesDepartamento from "@/services/ServicesDepartamento";
const service = new ServicesDepartamento();
export default {
  name:"DeleteComponent",
  data(){
    return{
      id:-2
    }
},
  methods:{
    deleteDepartamento(){
      service.deleteDepartamento(this.id).then(() => {
        this.$router.push('/');
      })
    }
  }, mounted(){
    this.id=this.$route.params.id;
  }
}
</script>

<style scoped></style>