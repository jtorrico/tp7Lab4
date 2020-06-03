<template>
  <div>
    <Menu/>
    <google-map/>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import GoogleMap from '../components/GoogleMap';

export default {
  name: "Lugar",
  components: {
    Menu,
    GoogleMap
  }
}
</script>
