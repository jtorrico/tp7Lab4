<template>
  <div>
    <b-media>
      <template v-slot:aside>
        <b-img
            style="padding: 20px"
            width="512"
            alt="placeholder"
            :src="require(`@/assets/images/${items[$route.params.id - 1].imagen}`)"
        ></b-img>
      </template>
      <div class="lineaVertical" style="text-align: left; padding: 40px">
        <p class="cantidad">{{items[$route.params.id - 1].cantidadVendida}} vendidos</p>
        <h5 class="nombre">{{items[$route.params.id - 1].instrumento}}</h5>
        <p class="precio">$ {{items[$route.params.id - 1].precio}}</p>
        <p>Marca: {{items[$route.params.id - 1].marca}}</p>
        <p>Modelo: {{items[$route.params.id - 1].modelo}}</p>
        <div>
          <p>Costo Envio:</p>
          <div v-if="items[$route.params.id - 1].costoEnvio === 'G'">
            <p class="envioGratis">
              <b-img :src="require(`@/assets/images/camion.png`)"></b-img>Envio gratis
            </p>
          </div>
          <div class="envio" v-else>
            <p>$ {{items[$route.params.id - 1].costoEnvio}}</p>
          </div>
        </div>
        <b-button variant="outline-primary">Agregar al carrito</b-button>
      </div>
    </b-media>
    <div class="descripcion">
    <p>Descripcion</p>
    <p>{{items[$route.params.id - 1].descripcion}}</p>
    </div>
  </div>
</template>

<script>
import instrumentos from "../../public/instrumentos.json";

export default {
  name: "Detalle",
  data() {
    return {
      items: instrumentos.instrumentos
    };
  }
};
</script>

<style scoped>
.lineaVertical {
  border-left: 0.5px solid grey;
  height: 500px;
  margin-left: 150px;
}

.cantidad {
    font-size: 12px;
}

.nombre {
    font-weight: bold;
    font-size: 25px;
}

.precio {
    font-size: 50px;
}

.envioGratis {
    color: green;
}

.envio {
    color: orange;
}

.descripcion {
    text-align: left;
    padding: 10px;
}
</style>