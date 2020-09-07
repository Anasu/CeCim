<template>
  <div class="home">
    <breadcrumb :items="bcItems"/>
    
    <h2>Panel de registro médico</h2>
    <p>Estás revisando los datos de <span class="paciente">{{nombrePaciente}}</span></p>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'

export default {
  name: 'Home',
  components: {
    Breadcrumb,
  },
  data()
  {
    return {
      nombrePaciente: 'Nombre del Paciente',
      bcItems: [
        {
            text: 'Inicio',
            to: '/'
          },
          {
            text: 'Panel de Registro Médico',
            active: true
          },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  text-align: left;

  .paciente {
    font-weight: 900;
  }
}


</style>