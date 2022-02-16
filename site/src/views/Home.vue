<template>
  <v-container>
    <qr-generator />
    <qr-validator />
  </v-container>
</template>

<script>
  import QrGenerator from '../components/QrGenerator.vue'
  import QrValidator from '../components/QrValidator.vue'

  export default {
    name: 'Home',

    components: {
      QrGenerator,
      QrValidator
    },
  }
</script>
