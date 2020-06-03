<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Musical Hendrix</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" to="/home">Home</b-nav-item>
          <b-nav-item href="#" to="/dondeEstamos">Donde Estamos</b-nav-item>
          <b-nav-item href="#" to="/productos">Productos</b-nav-item>
          <b-nav-item href="#" to="/editar">Editar</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Menu'
};
</script>