<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Get Web 3
        </h1>
        <v-btn>get it</v-btn>
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
    },
  }
</script>
