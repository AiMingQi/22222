<template>
  <v-container fluid>
    <qr-generator />
    <v-col>
    <qr-validator width="100%"/>
    </v-col>
  </v-container>
</template>

<script>
  import QrGenerator from '../components/QrGenerator.vue'
  import QrValidator from '../components/QrValidator.vue'

  export default {
    name: 'Home',

    components: {
      QrGenerator,
      QrValidator,
    },
  }
</script>
