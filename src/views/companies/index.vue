<template lang="pug">
div
  p.text-right
    router-link.btn.btn-primary(:to="{name: 'new_company_path'}") Nuevo
  table.table.table-hover.table-striped
    thead.thead-dark
      tr
        th ID
        th Op.
        th Nombre
        th RFC
    tbody
      tr(v-for="(item, key) in items")
        td(widhth="70px") {{ item.id }}
        td.text-center(width="70px")
          router-link(:to="{ name: 'company_path', params: {id:item.id} }")
            font-awesome-icon(icon='edit')
          a(href="#", @click.prevent="deleteItem(item.id)")
            font-awesome-icon(icon='times')
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
    this.loadItems()
  },
  methods: {
    loadItems() {
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
    },
    deleteItem(id) {
      this.axios
        .delete('https://runa-api.herokuapp.com/companies/'+ id)
        .then(response => {
          this.loadItems()
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    }
  }
}
</script>

<style lang="scss">
</style>
