<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Correo</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <p v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</p>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>

        <p class="mt-4 text-center">
          ¿No tienes una cuenta?
          <router-link to="/registro" class="text-blue-500 hover:underline">
            Regístrate aquí
          </router-link>
        </p>
        <p class="mt-2 text-center text-blue-500 hover:underline">¿Olvidaste tu contraseña?</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }
  },
  methods: {
    login() {
      this.emailError = ''
      this.passwordError = ''

      const registeredEmail = localStorage.getItem('registeredEmail')
      const registeredPassword = localStorage.getItem('registeredPassword')

      // Validar si el correo está registrado
      if (!registeredEmail || !registeredPassword) {
        this.emailError = 'No hay cuentas registradas. Por favor, regístrate primero.'
        return
      }

      // Validar el campo de correo
      if (this.email !== registeredEmail) {
        this.emailError = 'Correo incorrecto'
      }

      // Validar el campo de contraseña
      if (this.password !== registeredPassword) {
        this.passwordError = 'Contraseña incorrecta'
      }

      if (!this.emailError && !this.passwordError) {
        localStorage.setItem('isLoggedIn', true)
        this.$router.push('/')
      }
    }
  }
}
</script>
