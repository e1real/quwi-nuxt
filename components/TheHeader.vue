<template>
  <div class="header">
    <img class="header__logo" src="https://api.quwi.com/images/logo_150.png" alt="">
    <div class="header-auth">
      <button class="header-auth__login">
        Login
      </button>
      <button class="header-auth__register">
        Register
      </button>
      <button class="header-auth__logout">
        Logout
      </button>
    </div>
  </div>
</template>
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
</style>
