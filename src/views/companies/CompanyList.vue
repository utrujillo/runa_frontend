<template lang="pug">
.container
  .row
    .col-12
      p.text-right
        router-link.btn.btn-primary(:to="{name: 'new_company_path'}") Nuevo
      table.table.table-hover.table-striped
        thead.thead-dark
          tr
            th ID
            th Nombre
            th RFC
        tbody
          tr(v-for="(item, key) in items")
            td(widhth="30px") {{ item.id }}
            td {{ item.nombre }}
            td(width="200px") {{ item.rfc }}
</template>

<script>
export default {
  data () {
    return {
      items: null,
      loading: true,
      errored: false,
      company: {
        id: null,
        nombre: '',
        rfc: '',
        direccion: ''
      }
    }
  },
  mounted () {
    this.axios
      .get('https://runa-api.herokuapp.com/companies')
      .then(response => {
        this.items = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style lang="scss">
</style>
