<template lang="pug">
div
  rn-notification(v-show="objNotification.show",v-bind:objNotification="objNotification")
    span(slot="body") {{ objNotification.message }}

  p.text-right(v-if="!edit")
      a.btn.btn-success(@click="toggledEdit")
        font-awesome-icon.btn-icon(icon='edit')
        span.btn-icon  Editar
      a.btn.btn-danger.ml-1(@click="deleteItem")
        font-awesome-icon.btn-icon(icon='times')
        span.btn-icon  Eliminar
  p.text-right(v-else)
      a.btn.btn-secondary(@click="toggledEdit")
        font-awesome-icon.btn-icon(icon='eye')
        span.btn-icon  Mostrar
  
  table.table.table-hover
    tr
      th.text-right(width="200px") Nombre
      td(v-if="!edit") {{ company.nombre }}
      td(v-else) 
        input.form-control(type="text" v-model="company.nombre")
    tr
      th.text-right RFC
      td(v-if="!edit") {{ company.rfc }}
      td(v-else)
        input.form-control(type="text" v-model="company.rfc")
    tr
      th.text-right Dirección
      td(v-if="!edit") {{ company.direccion }}
      td(v-else)
        textarea.form-control(cols="5" v-model="company.direccion")

  p.text-right(v-if="edit")
    a.btn.btn-primary(@click="updateItem")
      font-awesome-icon.btn-icon(icon='circle-notch')
      span.btn-icon  Actualizar
</template>

<script>
import RnNotification from '@/components/shared/Notification.vue'

export default {
  components: { RnNotification },
  data () {
    return {
      loading: true,
      errored: false,
      edit: false,
      company: {
        id: null,
        nombre: '',
        rfc: '',
        direccion: ''
      },
      objNotification: {
        show: false,
        class: '',
        message: ''
      },
    }
  },
  
  mounted () {
    let id = this.$route.params.id

    this.axios
      .get('https://runa-api.herokuapp.com/companies/'+ id)
      .then(response => {
        this.company = response.data
      })
      .catch(error => {
        this.errored = true
      })
      .finally(() => this.loading = false)
  },

  methods: {
    toggledEdit() {
      this.edit = !this.edit
    },
    updateItem() {
      this.axios
        .put('https://runa-api.herokuapp.com/companies/'+ this.company.id, this.company)
        .then(response => {
          this.item = response.data
          console.log(response)
          if(response.statusText == 'OK'){
            this.objNotification.show = true
            this.objNotification.class = 'alert-success'
            this.objNotification.message = 'Elemento Actualizado'
          } else {
            this.objNotification.show = true
            this.objNotification.class = 'alert-warning'
            this.objNotification.message = 'Ocurrio un error al guardar los datos'
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => {
          this.loading = false
          this.toggledEdit()
        })
    },
    deleteItem() {
      this.axios
      .delete('https://runa-api.herokuapp.com/companies/'+ this.company.id)
      .then(response => {
        this.$router.push({ name: 'companies_path' })
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
    }
  }
}
</script>
