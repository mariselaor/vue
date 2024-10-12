<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu.vue' // Importar desde components

export default {
  components: {
    Menu
  }
}
</script>

<style>
/* Estilos globales aquí */
</style>
