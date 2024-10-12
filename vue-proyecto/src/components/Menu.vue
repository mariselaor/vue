<template>
  <nav class="bg-gray-800 p-4">
    <ul class="flex space-x-4">
      <li>
        <router-link to="/" class="text-white hover:underline">Inicio</router-link>
      </li>
      <li>
        <router-link to="/categorias" class="text-white hover:underline">Categorías</router-link>
      </li>
      <li>
        <router-link to="/add" class="text-white hover:underline">Agregar Horario</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #2d3748; /* Cambia el color de fondo según tus preferencias */
}
ul {
  list-style-type: none;
}
li {
  display: inline; /* Muestra los elementos en línea */
}
</style>
