<template>
  <v-container>
    <v-row class="text-center">
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
    props: [ 'tokenAddress' ],
    data: () => ({
      canvas: {},
      url: {},
      provider: '',
      seaport: {},
    }),
    created(){
      // With promises
        this.createQRCode();
    },
    methods: {
      createQRCode(){
        QRCode.toDataURL(this.tokenAddress)
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
