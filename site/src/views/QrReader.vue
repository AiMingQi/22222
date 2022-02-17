<template>
  <v-container>
  <v-row width="100%">
    <v-col cols="12">
    <v-card width="100%">
    </v-card>
    <qr-reader/>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  import QrReader from '../components/QRCodeReader.vue'

  export default {
    name: 'Home',

    components: {
      QrReader,
    },
  }
</script>
