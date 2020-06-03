<template>
  <div class="lista">
    <ul v-for="item in items" :key="item.id">
      <b-media tag="li">
        <template v-slot:aside>
          <b-img width="256" alt="placeholder" :src="require(`@/assets/images/${item.imagen}`)"></b-img>
        </template>
        <router-link :to="{name: 'Detalle', params: {id: item.id}}">{{item.instrumento}}</router-link>
        <p class="precio">$ {{item.precio}}</p>
        <div v-if="item.costoEnvio === 'G'">
            <p class="envioGratis"> <b-img :src="require(`@/assets/images/camion.png`)"></b-img> Envio gratis a todo el pais</p>
        </div>
        <div v-else>
            <p class="envio">Costo de Envio Interior de Argentina: $ {{item.costoEnvio}}</p>
        </div>
        <div>
        </div>
        <p class="cantidadVendidos">{{item.cantidadVendida}} vendidos</p>
      </b-media>
      <br><hr>
    </ul>
  </div>
</template>

<script>
import instrumentos from "../../public/instrumentos.json";

export default {
  name: "Producto",
  data() {
    return {
      items: instrumentos.instrumentos
    };
  }
};
</script>

<style scoped>
  .nombre {
    text-align: center;
    font-size: 25px;
  }

  .precio {
    font-size: 50px;
  }

  .envio {
    font-size: 15px;
    color: orange;
  }

  .envioGratis {
    font-size: 15px;
    color: green;
  }

  .cantidadVendidos {
    font-size: 12px;
  }
  .lista {
    padding: 50px;
  }
</style>