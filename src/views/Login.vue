<template>
  <div class="login">
    <formulario-login
     titulo="Ingreso a CeCim"
     subtitulo="Introduzca sus credenciales para continuar."
    ></formulario-login>
  </div>
</template>

<script>
import FormularioLogin from '@/components/FormularioLogin'

export default {
  name: 'Login',
  components: {
    FormularioLogin,
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8%;

  .loginform {
    text-align: left;
  }  
}
</style>