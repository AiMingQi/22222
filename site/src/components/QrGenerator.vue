<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-img id="canvas" :src="url" max-width="420px" class="mx-auto"></v-img>        
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
