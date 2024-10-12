<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
    <h2 class="text-2xl font-bold mb-4">Seleccionar Día</h2>
    <ul>
      <li v-for="dia in dias" :key="dia" @click="selectDia(dia)" class="cursor-pointer mb-2">
        {{ dia }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    }
  },
  methods: {
    selectDia(dia) {
      const diaSlug = dia.replace(/\s+/g, '-').toLowerCase()
      this.$router.push(`/schedule/${diaSlug}`) // Redirigir a la página de horarios con el día seleccionado
    }
  }
}
</script>

<style scoped>
li:hover {
  color: blue;
}
</style>
