<template>
  <div>
    <p class="error">{{ error }}</p>

    <p class="decode-result">Secret Code: <b>{{ result.contractAddress }}</b></p>
    <p class="decode-result">Secret Code: <b>{{ result.tokenAddress }}</b></p>
    <p class="decode-result">Secret Code: <b>{{ result.secretPhrase }}</b></p>
    <p class="decode-result">Secret Code: <b>{{ result.clubColor }}</b></p>
    {{result}}

    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
import { QrcodeStream} from 'vue-qrcode-reader'

export default {

  components: { QrcodeStream },

  data () {
    return {
      result: { 
            contractAddress: "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
            tokenAddress: "Nope",
            secretPhrase: "Dance More",
            clubColor: "Magic"
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
</style>