<template>
    <div>
        <Menu/>
        <Detalle/>
    </div>
</template>


<script>
// @ is an alias to /src
import Menu from '../components/Menu.vue'
import Detalle from '../components/Detalle.vue'

export default {
  name: 'Detalles',
  components: {
    Menu,
    Detalle
  }
}
</script>
