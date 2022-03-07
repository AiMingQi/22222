<template>
  <v-container >
  <black-lit></black-lit>
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
  import BlackLit from '../components/blackLit.vue'

  export default {
    name: 'Home',

    components: {
      QrReader,
      BlackLit
    },
  }
</script>
