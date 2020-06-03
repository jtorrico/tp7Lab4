<template>
    <div>
        <Menu/>
        <EditarProducto/>
    </div>
</template>

<script>

import Menu from '../components/Menu.vue'
import EditarProducto from '../components/EditarProducto.vue'

export default {
    name: 'EditarProductos',
    components: {
        Menu,
        EditarProducto
    }
}
</script>