<template>
  <div id="app">
    <div class="container">
      <barra-user></barra-user>
      <router-view ></router-view>
    </div>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import BarraUser from './components/BarraUser'

export default {
  components: {
    Navbar,
    BarraUser
  },
  data() {
    return {
    }
  }
}
</script> 

<style lang="scss">
//roboto
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');


#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
}

.container {
  max-width: 900px;
}
</style>
