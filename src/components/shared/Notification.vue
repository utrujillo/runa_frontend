<template lang="pug">
.alert.alert-dismissible.fade.show(v-bind:class="objNotification.class")
  slot(name="body")
  button.close(type='button', data-dismiss='alert')
    span(aria-hidden='true') ×
</template>

<script>
  export default {
    props: {
      objNotification: { type: Object, required: true }
    }
  }
</script>
