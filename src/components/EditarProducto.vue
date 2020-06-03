<template>
    <div>
        <h5 style="padding: 20px">Editar Producto</h5>
        <div class="container">
            <form @submit="guardarRegistro">
                <div class="row">
                    <div class="col">
                        <fieldset class="form-group">
                            <label>ID</label>
                            <input type="text" class="form-control" v-model="id" disabled>
                        </fieldset>
                    </div>
                    <div class="col">
                        <fieldset class="form-group">
                            <label>Instrumento</label>
                            <input type="text" class="form-control" v-model="instrumento.instrumento">
                        </fieldset>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <fieldset class="form-group">
                            <label>Marca</label>
                            <input type="text" class="form-control" v-model="instrumento.marca">
                        </fieldset>
                    </div>
                    <div class="col">
                        <fieldset class="form-group">
                            <label>Modelo</label>
                            <input type="text" class="form-control" v-model="instrumento.modelo">
                        </fieldset>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <fieldset class="form-group">
                            <label>Precio</label>
                            <input type="text" class="form-control" v-model="instrumento.precio">
                        </fieldset>
                    </div>
                    <div class="col">
                        <fieldset class="form-group">
                            <label>Imagen</label>
                            <input type="text" class="form-control" v-model="instrumento.imagen">
                        </fieldset>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <fieldset class="form-group">
                            <label>Costo Envio</label>
                            <input type="text" class="form-control" v-model="instrumento.costoEnvio">
                        </fieldset>
                    </div>
                    <div class="col">
                        <fieldset class="form-group">
                            <label>Cantidad Vendida</label>
                            <input type="text" class="form-control" v-model="instrumento.cantidadVendida">
                        </fieldset>
                    </div>
                </div>
                <fieldset class="form-group">
                    <label>Descripcion</label>
                    <textarea type="textarea" class="form-control" rows="4" v-model="instrumento.descripcion"></textarea>
                </fieldset>
                <b-button variant="success" v-on:click="guardarRegistro(instrumento)">Guardar</b-button>
            </form>
        </div>
    </div>
</template>

<script>
import ProductoService from '../services/ProductoService'

export default {
    name: 'EditarProducto',
    data(){
        return {
            instrumento: {}
        };
    },
    computed: {
        id(){
            return this.$route.params.id;
        }
    },
    methods: {
        obtenerRegistro(){
            ProductoService.getById(this.id)
            .then(res => {
                this.instrumento = res.data;
            });
        },
        /* eslint-disable */
        guardarRegistro(data){
            if (this.id){
                ProductoService.post(this.instrumento)
                .then(() => {
                this.$router.push('/editar');
                });
            } else {
                ProductoService.put(this.id, this.instrumento)
                .then(() => {
                    this.$router.push('/editar');
                })
            }
        }
        /* eslint-enable */
    },
    created(){
        this.obtenerRegistro();
    }
};
</script>