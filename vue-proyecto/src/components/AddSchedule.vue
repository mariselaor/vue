<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
    <h2 class="text-2xl font-bold mb-4">Añadir Nuevo Horario</h2>
    <form @submit.prevent="saveSchedule">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Día:</label>
        <select
          v-model="dia"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
        >
          <option value="">Selecciona un día</option>
          <option value="lunes">Lunes</option>
          <option value="martes">Martes</option>
          <option value="miércoles">Miércoles</option>
          <option value="jueves">Jueves</option>
          <option value="viernes">Viernes</option>
          <option value="sábado">Sábado</option>
          <option value="domingo">Domingo</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Horario:</label>
        <input
          type="text"
          v-model="horario"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Asignatura:</label>
        <input
          type="text"
          v-model="asignatura"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Docente:</label>
        <input
          type="text"
          v-model="docente"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Salón:</label>
        <select
          v-model="salon"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
        >
          <option value="Computo A3">Computo A3</option>
          <option value="Computo C3">Computo C3</option>
          <option value="Computo B1">Computo B1</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Carrera:</label>
        <select
          v-model="categoria"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
        >
          <option value="">Selecciona una carrera</option>
          <option v-for="categoria in categorias" :key="categoria" :value="categoria">
            {{ categoria }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mt-4">Guardar</button>
      <router-link
        :to="{ path: '/days', query: { category: categoria } }"
        class="inline-block mt-2"
      >
        <button type="button" class="btn btn-secondary">Cancelar</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      dia: '',
      horario: '',
      asignatura: '',
      docente: '',
      salon: '',
      categoria: '',
      categorias: [
        'Ingeniería Agroecológica',
        'Licenciatura en Ciencias de la Computación',
        'Técnico en Ingeniería Agroecológica',
        'Técnico en Desarrollo de Aplicaciones Informáticas',
        'Licenciatura en Trabajo Social',
        'Licenciatura en Teología',
        'Licenciatura en Idioma Inglés',
        'Licenciatura en Contaduría Pública',
        'Licenciatura en Ciencias Jurídicas',
        'Licenciatura en Administración de Empresas',
        'Licenciatura en Psicología'
      ]
    }
  },
  methods: {
    async saveSchedule() {
      try {
        const horariosCollection = collection(db, 'horarios')
        await addDoc(horariosCollection, {
          horario: this.horario,
          dia: this.dia,
          asignatura: this.asignatura,
          docente: this.docente,
          salon: this.salon,
          categoria: this.categoria
        })
        console.log('Horario guardado con éxito')
        this.$router.push('/categorias') // Redirige a la página de categorias
      } catch (error) {
        console.error('Error al guardar el horario:', error)
      }
    }
  }
}
</script>

<style scoped></style>
