<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Instrumento</th>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Imagen</th>
          <th scope="col">Costo Envio</th>
          <th scope="col">Cantidad Vendida</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in instrumentos" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.instrumento}}</td>
            <td>{{item.marca}}</td>
            <td>{{item.modelo}}</td>
            <td>{{item.imagen}}</td>
            <td>{{item.costoEnvio}}</td>
            <td>{{item.cantidadVendida}}</td>
            <td>{{item.descripcion}}</td>
            <td><b-button variant="warning" v-on:click="actualizarRegistro(item.id)">Editar</b-button></td>
            <td><b-button variant="danger" v-on:click="eliminarRegistro(item)">Eliminar</b-button></td>
        </tr>
      </tbody>
    </table>
    <hr>
    <div class="row" style="padding: 30px">
          <b-button variant="primary" v-on:click="crearRegistro()">Añadir Producto</b-button>
    </div>
  </div>
</template>

<script>
import ProductoService from '../services/ProductoService'

export default {
    name: 'Edicion',
    data(){
        return {
            instrumentos: []
        };
    },
    methods: {
        listarProductos(){
            ProductoService.getAll()
            .then(response => {
                this.instrumentos = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
            });
        },
        /* eslint-disable */
        eliminarRegistro(item){
            ProductoService.delete(item.id)
            .then(response => {
                const id = this.instrumentos.indexOf(item)
                this.instrumentos.splice(id, 1)
                alert("Registro Eliminado");
            })
        },
        /* eslint-enable */
        actualizarRegistro(id){
            this.$router.push(`/editar/${id}`)
        },
        crearRegistro(){
            const id = this.instrumentos.length + 1;
            console.log(id)
            this.$router.push(`/editar/${id}`)
            //this.$router.push('editar/-1')
        }
    },
    created(){
        this.listarProductos();
    }
}
</script>