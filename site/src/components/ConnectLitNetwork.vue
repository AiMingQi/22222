<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-img id="canvas" :src="url" max-width="300px" class="mx-auto"></v-img>        
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>

import LitJsSdk from 'lit-js.sdk'
 
  export default {
    name: 'ConnectLitNetwork',
    data: () => ({
    }),
    created(){
      // With promises
        const client = new LitJsSdk.LitNodeClient()
        await client.connect()
        window.litNodeClient = client
    },
    methods: {
     
    },
  }
</script>