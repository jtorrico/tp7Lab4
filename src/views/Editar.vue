<template>
    <div>
        <Menu/>
        <Edicion/>
    </div>
</template>

<script>
// @ is an alias to /src
import Menu from '../components/Menu.vue'
import Edicion from '../components/Edicion.vue'

export default {
  name: 'Editar',
  components: {
    Menu,
    Edicion
  }
}
</script>