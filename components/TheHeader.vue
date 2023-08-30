<template>
  <div class="header">
    <img class="header__logo" src="https://api.quwi.com/images/logo_150.png">
    <div class="header-auth">
      <nuxt-link class="header-auth__projects header-auth-btn" to="/">
        Projects
      </nuxt-link>
      <nuxt-link v-if="!isAuthentifcated" to="/auth/login" class="header-auth__login header-auth-btn">
        Login
      </nuxt-link>
      <a v-else class="header-auth__logout header-auth-btn" @click="logout">
        Logout
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isAuthentifcated: 'auth/check'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>
<style scoped>
.header {
  display: flex;
  background-color: #f8f8f8;
  padding: 16px 24px;
}
.header__logo {
  width: 30px;
  height: 30px;
}
.header-auth {
  margin-left: auto;
}
.header-auth-btn {
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333644;
  text-transform: uppercase;
}
.header-auth-btn:not(:last-child) {
  margin-right: 16px;
}
</style>
