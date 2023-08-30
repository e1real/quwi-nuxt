<template>
  <div class="login-page">
    <form class="login-form" @submit.prevent="handleSubmitLoginForm">
      <h3>Login form</h3>
      <input v-model="form.email" class="login-form__item" type="email" placeholder="E-mail">
      <input v-model="form.password" class="login-form__item" type="password" placeholder="Password">
      <button class="login-form__submit">
        Login
      </button>
    </form>
  </div>
</template>
<script>
export default {
  middleware: 'guest',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmitLoginForm () {
      try {
        const { data } = await this.$axios.post('/auth/login', { ...this.form })
        this.$store.dispatch('auth/saveToken', {
          token: data.token
        })
        this.$store.dispatch('auth/updateUser', {
          user: data.app_init.user
        })
        this.$router.push('/')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }
}
</script>
<style scoped>
.login-page {
  display: flex;
  justify-content: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}

.login-form__item {
  margin-bottom: 16px;
}

.login-form__submit {
  align-self: normal;
}
</style>
