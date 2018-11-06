<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
    router-link.navbar-brand(to="/")
      font-awesome-icon(icon='dice-d6')
      span &nbsp;Runa 
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarToggler')
      span.navbar-toggler-icon
    
    #navbarToggler.collapse.navbar-collapse
      .navbar-nav.flex-row.ml-md-auto.d-none.d-md-flex
        li
          a.nav-item.nav-link(to="/") Nombre de usuario
</template>

<script>
</script>

<style lang="scss">
</style>
