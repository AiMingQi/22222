<template>
  <v-container>
    <qr-generator />
  </v-container>
</template>

<script>
  import QrGenerator from '../components/QrGenerator.vue'

  export default {
    name: 'Home',

    components: {
      QrGenerator,
    },
  }
</script>
