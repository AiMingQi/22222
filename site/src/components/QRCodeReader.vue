<template>
<v-container fluid :class="result.clubColor">
<v-row class="pa-12">
    <v-col cols="12">
        <v-card class="pa-5">
            <p class="error">{{ error }}</p>

                <qrcode-stream @decode="onDecode" @init="onInit" />
                <v-card v-show="result.contractAddress" dark class="pa-5 mt-3">
                    <h2 v-show="result.secretPhrase" class="decode-result">Secret Code: <b>{{ result.secretPhrase }}</b></h2>
                    <h3 v-show="result.clubColor !=='Undefined'" class="decode-result">Club Color: <b>{{ result.clubColor }}</b></h3>
                    <br>
                    <qr-generator :tokenAddress="'mycolorado://share?Destination=1545&ControlCode=12345&Message=22222.World Verified Member'"></qr-generator>
                    <p v-show="result.contractAddress" class="decode-result">Contract Address: <b>{{ result.contractAddress }}</b></p>
                    <p v-show="result.tokenAddress" class="decode-result">Token Address: <b>{{ result.tokenAddress }}</b></p>
                </v-card>
            </v-card> 
            
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { QrcodeStream} from 'vue-qrcode-reader'
import QrGenerator from "../components/QrGenerator.vue"

export default {

  components: { QrcodeStream, QrGenerator },

  data () {
    return {
      result: { 
            contractAddress: "",
            tokenAddress: "",
            secretPhrase: "",
            clubColor: "Undefined"
        },
      error: ''
    }
  },

  methods: {
    onDecode (result) {
      this.result = JSON.parse(result)
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
.Red {background: #c00000;}
.Gold {background: gold;}
.Purple {background: purple;}
.Black {background: black;}
.Undefined {background: green;}

</style>