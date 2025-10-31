<template>

  <h1>Update</h1>
  <form v-if="departamento">
    <div class="row g-2 mb-3">
      <div class="col">
        <div class="form-floating">
          <input id="numero" type="number" class="form-control" placeholder="Numero" disabled :value=departamento.numero>
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

    <button v-on:click.prevent="editarDepartamento" class="btn btn-info w-100">Editar</button>
  </form>

</template>

<script>
import ServicesDepartamento from "@/services/ServicesDepartamento";
const service = new ServicesDepartamento();
export default {
  name: 'UpdateDepartamento',
  data() {
    return {
      departamento: null
    }
  },
  methods: {
    editarDepartamento() {
      service.editDepartamento(this.departamento).then(() => {
        this.$router.push("/")
      })

    }
  },mounted(){
    service.getDepartamentoById(this.$route.params.id).then(response => {
      this.departamento = response;
    })
  }
}
</script>
<style scoped>

</style>