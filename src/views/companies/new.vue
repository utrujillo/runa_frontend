<template lang="pug">
div
  rn-notification(v-show="objNotification.show",v-bind:objNotification="objNotification")
    span(slot="body") {{ objNotification.message }}
  form
    .form-group
      label Nombre
      input.form-control(type='text', placeholder='Nombre de la Compañia', v-model='company.nombre')
    .form-group
      label RFC
      input.form-control(type='text', placeholder='ej. ABCD124356X3', v-model='company.rfc')
    .form-group
      label Dirección
      textarea.form-control(cols='5', v-model='company.direccion')
    .form-group
      input.btn.btn-primary(type="submit", value="Aceptar", @click.prevent="saveCompany ")
</template>

<script>
import RnNotification from '@/components/shared/Notification.vue'

export default {
  components: { RnNotification },
  data () {
    return {
      item: null,
      errored: null,
      loading: true,
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
  methods: {
    saveCompany () {
      this.axios
        .post('https://runa-api.herokuapp.com/companies', this.company)
        .then(response => {
          this.item = response.data
          console.log(response)
          if(response.statusText == 'Created'){
            this.objNotification.show = true
            this.objNotification.class = 'alert-success'
            this.objNotification.message = 'Elemento creado'
          } else {
            this.objNotification.show = true
            this.objNotification.class = 'alert-warning'
            this.objNotification.message = 'Elemento no creado'
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  }
}
</script>
