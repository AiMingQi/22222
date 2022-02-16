<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/NFTW-Square-Logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Generate QR Code
        </h1>
        <v-btn>Generate</v-btn>
      </v-col>      
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          QR Code Generated
        </h1>
        <v-img id="canvas" :src="url"></v-img>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
import QRCode from 'qrcode'

  export default {
    name: 'QrGenerator',
    data: () => ({
      canvas: {},
      url: {}
    }),
    created(){
      // With promises
        this.createQRCode();
    },
    methods: {
      createQRCode(){
        QRCode.toDataURL('I am a pony!')
          .then(url => {
            console.log(url)
            this.url = url
          })
          .catch(err => {
            console.error(err)
          })
    }
  },
  }
</script>
