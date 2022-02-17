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
        <v-btn @click="getWeb3">Generate</v-btn>
      </v-col>      
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          QR Code Generated
        </h1>
        <v-img id="canvas" :src="url"></v-img>
        <nft-card
          tokenAddress="0x495f947276749Ce646f68AC8c248420045cb7b5e"
          tokenId="67201874612487930781359947374147540542883839083498399740011074561793127874561"
          network="mainnet"
          referrerAddress="YOUR_ADDRESS_HERE"
          >
        </nft-card>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
import QRCode from 'qrcode'
import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
 
  export default {
    name: 'QrGenerator',
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
      getWeb3() {
        let provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/')
        let seaport = new OpenSeaPort(this.provider, {
          networkName: Network.Main,
          apiKey: ''
        })
        console.log (provider)
        console.log (seaport)
      },
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
