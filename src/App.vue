<template>
  <div
    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]"
  >
    <div class="demo">
      <barra-user></barra-user>
      <div class="container">
        <router-view />
      </div>
      <sidebar-menu
        :menu="menulogin"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      <div
        v-if="isOnMobile && !collapsed"
        class="sidebar-overlay"
        @click="collapsed = true"
      />
    </div>
  </div>
</template>

<script>
import BarraUser from './components/BarraUser'

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}
console.log(separator)
export default {
  name: 'App',
  components: {
    BarraUser
  },
  data () {
    return {
      collapsed: false,
      selectedTheme: 'default-theme',
      isOnMobile: false
    }
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
          {
            href: 'login',
            title: 'Ingresa para ver más opciones',
          },
        ]
      }
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
      console.log('onItemClick')
      console.log(event)
      console.log(item)
      console.log(node)
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}
#demo {
  padding-left: 350px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
.demo {
  padding: 0;
}
pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
.v-sidebar-menu {
  background-color: #013F5E!important;

  button {
    background-color: #00283b!important;
  }

  .vsm--toggle-btn::after {
    content: none!important;
  }
}
</style>