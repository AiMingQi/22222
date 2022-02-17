<template>
  <v-container>
  <v-row width="100%">
    <v-col cols="12">
    <v-card width="100%">
    </v-card>
    <qr-validator/>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  import QrValidator from '../components/QrValidator.vue'

  export default {
    name: 'Home',

    components: {
      QrValidator,
    },
  }
</script>
