<template>
  <sidebar-menu :menu="menulogin" collapsed/>
</template>
 
<script>
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  components: {
    SidebarMenu
  },
  computed: {
    menulogin(){
      if(this.$store.getters.getLogStatus){
        return [
          {
            header: true,
            title: 'CeCim',
            hiddenOnCollapse: true
          },
          {
            href: '/soon',
            title: 'Calendario',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Tablero de Flujo',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Recall Board',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Mensajes',
            //icon: 'fa fa-user'
          },
          {
            href: '/Dashboard',
            title: 'Paciente / Cliente',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Tarifas',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Inventario',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Procedimientos',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Informes',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Misceláneos',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Menús Emergentes',
            //icon: 'fa fa-user'
          },
          {
            href: '/soon',
            title: 'Acerca de',
            //icon: 'fa fa-user'
          }
        ]
      }
      else 
      {
        return [
          {
            header: true,
            title: 'CeCim',
            hiddenOnCollapse: true
          },
        ]
      }
    }
  }
}
</script> 

<style lang="scss" scoped>
.v-sidebar-menu {
  background-color: #013F5E;
}

button {
  background-color: #00283b;
}

</style>