import DepartamentosComponent from "@/components/departamentoscomponent/DepartamentosComponent.vue";
import {createRouter, createWebHistory} from "vue-router";
import CreateComponent from "@/components/createcomponent/CreateComponent.vue";
import DetailsDepartamento from "@/components/detailsdepartamento/DetailsDepartamento.vue";
import UpdateDepartamento from "@/components/updatedepartamento/UpdateDepartamento.vue";
import DeleteComponent from "@/components/deletecomponent/DeleteComponent.vue";

var myRoutes=[
     {path:"/",component:DepartamentosComponent},
     {path:"/create",component:CreateComponent},
     {path:"/details/:id/:nombre/:localidad",component:DetailsDepartamento},
     {path:"/update/:id",component:UpdateDepartamento},
     {path:"/delete/:id",component:DeleteComponent},
 ]

var route= createRouter({
    history:createWebHistory(),
    routes:myRoutes
})


export default route;