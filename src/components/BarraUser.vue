<template>
  <div class="navbar-top">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button variant="info">
          <b-icon icon="person-fill"></b-icon> {{username}}
        </b-button>
      </b-navbar-nav>

  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarTop',
  computed: {
    username()
    {
      return this.$store.getters.getUsername
    }
  }
}
</script>