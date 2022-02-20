<template>
<v-container fluid :class="result.clubColor">
<v-row class="pa-8">
    <v-col cols="12">
        <v-card class="pa-5">
            <p class="error">{{ error }}</p>

                <qrcode-stream @decode="onDecode" @init="onInit" />
                <v-card v-show="haveScan" dark class="pa-5 mt-3">
                    <h2 v-show="haveScan" class="decode-result">Secret Code: <b>{{ result.secretPhrase }}</b></h2>
                    <h3 v-show="haveScan" class="decode-result">Club Color: <b>{{ result.clubColor }}</b></h3>
                    <br>
                    <p v-show="haveScan" class="decode-result">Contract Address: <b>{{ result.contractAddress }}</b></p>
                    <p v-show="haveScan" class="decode-result">Token Address: <b>{{ result.tokenAddress }}</b></p>
                </v-card>

                <v-card v-show="haveScan" dark class="pa-5 mt-3">
                    <h2 class="text-center">myColoradoID Validation</h2>

                    <v-img
          alt="Home Button - NFTW Logo"
          class="mx-auto"
          contain
          :src="require('../assets/Flag_of_Colorado.svg.png')"
          transition="scale-transition"
          width="400"
                  />
                    <qr-generator v-show="!haveMyColoradoVerification" :tokenAddress="myColoradoBase"></qr-generator>
                    <v-btn v-show="!haveMyColoradoVerification" @click="checkColoradID" block x-large color="green">Check ID</v-btn>
                    <v-card class="pa-2 mt-2" light v-show="haveMyColoradoVerification">
                        <h2 class="decode-result">Name: <b>{{ myColoradResult.FirstName }} {{ myColoradResult.LastName }}</b></h2>
                        <h3 class="decode-result">Over 21: <b>{{ myColoradResult.Over21 }}</b></h3>
                        <h3 class="decode-result">Message: <b>{{ myColoradResult.Message }}</b></h3>
                    </v-card>
                </v-card>
        
        </v-card> 
            
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { QrcodeStream} from 'vue-qrcode-reader'
import QrGenerator from "../components/QrGenerator.vue"
import axios from 'axios'

export default {

  components: { QrcodeStream, QrGenerator },

  data () {
    return {
        haveScan: false,
        haveMyColoradoVerification: false,
      result: { 
            contractAddress: "",
            tokenAddress: "",
            secretPhrase: "",
            clubColor: ""
        },
      error: '',
      myColoradoBase: 'mycolorado://share?Destination=1545&ControlCode22222World&Message=22222.World Verified Member',
      myColoradResult: {
          FirstName: 'Erick',
          LastName: 'Crumb',
          Over21: true,
          ControlCode: '22222World',
          Message: '22222.World Verified Member',
          merchant_id: 22222
      }

    }
  },

  methods: {
    onDecode (result) {
      this.result = JSON.parse(result);
      console.log(this.myColoradoBase)
      this.haveScan = true;
      this.getMyColoradoStatus ();
    },
    checkColoradID () {
        this.haveMyColoradoVerification = true;
    },
    async getMyColoradoStatus () {
        axios
            .get('https://myColorad.com')
            .then(response => (this.info = response))
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
  },


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