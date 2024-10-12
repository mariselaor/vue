<template>
  <div>
    <h2>{{ day }}</h2>
    <table>
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Día</th>
          <th>Horario</th>
          <th>Docente</th>
          <th>Salón</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="clase in clasesFiltradas" :key="clase.id">
          <td>{{ clase.asignatura }}</td>
          <td>{{ clase.dia }}</td>
          <td>{{ clase.horario }}</td>
          <td>{{ clase.docente }}</td>
          <td>{{ clase.salon }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="clasesFiltradas.length === 0">No hay clases programadas para este día.</p>
  </div>
</template>

<script>
import { db } from '@/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export default {
  data() {
    return {
      day: this.$route.params.day,
      clases: [],
      horarioFiltrado: ''
    }
  },
  async created() {
    await this.fetchClases()
  },
  computed: {
    clasesFiltradas() {
      return this.clases.filter((clase) => {
        const matchesDia = clase.dia === this.day
        const matchesHorario = this.horarioFiltrado
          ? clase.horario.includes(this.horarioFiltrado) // Filtra por horario
          : true // Si no hay filtro, incluye todas las clases
        return matchesDia && matchesHorario
      })
    }
  },
  methods: {
    async fetchClases() {
      try {
        const horariosCollection = collection(db, 'horarios') // Referencia a la colección de horarios
        const q = query(horariosCollection, where('dia', '==', this.day)) // Filtra por día
        const querySnapshot = await getDocs(q)
        this.clases = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Asigna el id del documento
          ...doc.data() // Obtiene los datos del documento
        }))
      } catch (error) {
        console.error('Error al obtener las clases:', error)
      }
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
p {
  color: red;
}
</style>
