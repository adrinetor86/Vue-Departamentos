<template>
  <div class="form-custom mx-auto">

    <h3>Create Departamento</h3>
    <form>
      <div class="row g-2 mb-3">
        <div class="col">
          <div class="form-floating">
            <input id="numero" type="number" class="form-control" placeholder="Numero" v-model="departamento.numero">
            <label for="numero">Número</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating">
            <input id="departamento" type="text" class="form-control" placeholder="Nombre" v-model="departamento.nombre">
            <label for="departamento">Nombre</label>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <div class="form-floating">
          <input id="localidad" type="text" class="form-control" placeholder="Localidad" v-model="departamento.localidad">
          <label for="localidad">Localidad</label>
        </div>
      </div>

      <button v-on:click.prevent="crearDepartamento" class="btn btn-info w-100">Crear</button>
    </form>
  </div>
</template>

<script>
import ServicesDepartamento from "@/services/ServicesDepartamento";

const service = new ServicesDepartamento();
export default {
  name: 'CreateComponent',
  data(){
    return{
      departamento:{
        numero:-1,
        nombre:"",
        localidad:"",
      }
    }
  },
  methods:{
    crearDepartamento(){

      service.createDepartamento(this.departamento).then(()=>{
        this.$router.push("/")
      })

    }
  }
}
</script>



<style scoped>
.form-custom {
  max-width: 350px;
  background: #1a1a1a;
  color: #fff;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #333;
}
.title {
  position: relative;
  padding-left: 30px;
  color: #00bfff;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.title::before,
.title::after {
  content: "";
  position: absolute;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #00bfff;
}
.title::after {
  animation: pulse 1s linear infinite;
  opacity: 0.8;
}
.message { color: rgba(255,255,255,0.7); font-size: 14.5px; }
.form-control {
  background: #333;
  color: #fff;
  border: 1px solid rgba(105,105,105,0.397);
  border-radius: 10px;
  padding: 1rem 0.5rem 0.5rem 0.75rem;
  height: auto;
}
.form-control:focus {
  box-shadow: none;
  border-color: #00bfff;
}
.form-floating > label { color: rgba(255,255,255,0.7); font-weight: 600; }
.btn-info {
  background-color: #00bfff;
  border-color: #00bfff;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
}
.btn-info:hover { background-color: #00bfff96; border-color: #00bfff96; }
@keyframes pulse {
  from { transform: scale(0.9); opacity: 1; }
  to   { transform: scale(1.8); opacity: 0; }
}
</style>