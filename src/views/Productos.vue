<template>
    <div>
        <Menu/>
        <Producto/>
    </div>
</template>


<script>
// @ is an alias to /src
import Menu from '../components/Menu.vue'
import Producto from '../components/Producto.vue'

export default {
  name: 'Productos',
  components: {
    Menu,
    Producto
  }
}
</script>
