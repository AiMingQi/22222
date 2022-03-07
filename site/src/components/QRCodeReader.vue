<template>
<v-container fluid :class="result.clubColor">
<v-row class="pa-8">
    <v-col cols="12" lg="6" sm="12">
    <v-card class="mb-3">
    </v-card>
        <v-card class="pa-5 mx-auto" max-width="600px">
            <p class="error">{{ error }}</p>

            <qrcode-stream @decode="onDecode" @init="onInit" />
        </v-card> 
                <v-card v-show="haveScan" dark class="pa-5 mt-3">
                    <h2 v-show="haveScan" class="decode-result">Secret Code: <b>{{ result.secretPhrase }}</b></h2>
                    <h3 v-show="haveScan" class="decode-result">Club Color: <b>{{ result.clubColor }}</b></h3>
                    <br>
                    <p v-show="haveScan" class="subtitle-2">Contract Address: <b>{{ result.contractAddress }}</b></p>
                    <p v-show="haveScan" class="subtitle-2">Token Address: <b>{{ result.tokenAddress }}</b></p>
                    <p v-show="haveScan" class="subtitle-2">verified JWT: <b>{{ result.verifiedJwt }}</b></p>
                    <p v-show="haveScan" class="subtitle-2">Valid JWT: <b>{{ validJWT }}</b></p>
                </v-card>
    </v-col>
 
    <v-col cols="12" lg="6" sm="12">
                <v-card v-show="haveScan" dark class="pa-5 mx-auto" max-width="600px">
                    <h2 class="text-center">myColoradoID Validation</h2>

                    <qr-generator v-show="!haveMyColoradoVerification" :tokenAddress="myColoradoBase"></qr-generator>
                    <v-btn v-show="!haveMyColoradoVerification" @click="checkColoradID" block x-large color="green">Check ID</v-btn>
                    <v-card class="pa-2 mt-2" light v-show="haveMyColoradoVerification">
                        <v-img
                            alt="Home Button - NFTW Logo"
                            class="mx-auto"                            
                            :src="require('../assets/Flag_of_Colorado.png')"
                            transition="scale-transition"
                            contain
                                />
                        <v-card-text>
                            <h2 class="decode-result">Name: <b>{{ myColoradResult.FirstName }} {{ myColoradResult.LastName }}</b></h2>
                            <h3 class="decode-result">Over 21: <b>{{ myColoradResult.Over21 }}</b></h3>
                            <h3 class="decode-result">Message: <b>{{ myColoradResult.Message }}</b></h3>
                        </v-card-text>
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
import LitJsSdk from 'lit-js-sdk'

export default {

  components: { QrcodeStream, QrGenerator },

  data () {
    return {
      validJWT: false,
        haveScan: false,
        haveMyColoradoVerification: false,
      result: { 
            contractAddress: "",
            tokenAddress: "",
            secretPhrase: "",
            clubColor: "",
            verifiedJwt: ""
        },
      error: '',
      myColoradoBase: 'mycolorado://share?Destination=1545&ControlCode22222World&Message=22222.World Verified Member',
      myColoradResult: {
          FirstName: 'Mitchell',
          LastName: 'Valentine',
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
      this.verifyJwt();
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
    },
    async verifyJwt () {
        let jwt = this.result.verifiedJwt
        // const data = await fetch('/verify?jwt=' + this.jwt).then(resp => resp.json())
        const { verified, header, payload } = LitJsSdk.verifyJwt( { jwt } )
        console.log(verified)
        console.log(header)
        console.log(payload)
        this.validJWT = true
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