<template lang="pug">
  #app
    rn-navbar
    .container-fluid
      .row
        .col-3.py-1
          rn-sidebar
        .col-9.py-1
          .card
            .card-header Contenido
            .card-body
              router-view
</template>

<script>
import RnNavbar from '@/views/layout/Navbar.vue'
import RnSidebar from '@/views/layout/Sidebar.vue'

export default {
  name: 'app',
  components: { RnNavbar, RnSidebar }
}
</script>

<style lang="scss">
</style>
