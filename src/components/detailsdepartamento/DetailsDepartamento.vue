<template>
  <div>
    <h1>Detalles</h1>

    <div class="card">
      <h2>ID: {{id}}</h2>
      <h2>Nombre: {{nombre}}</h2>
      <h2>Localidad: {{localidad}}</h2>
    </div>
    <button @click="volverDepartamentos">Volver</button>
  </div>
</template>

<script>
export default {
  name:"DetailsDepartamento",
  data(){
    return{
      id:0,
      nombre:"",
      localidad:"",
    }
  },
  methods:{
    volverDepartamentos(){
        this.$router.push("/")
    }
  },
  mounted(){
      this.id=this.$route.params.id;
      this.nombre=this.$route.params.nombre;
      this.localidad=this.$route.params.localidad;
  }
}
</script>
<style scoped>

</style>