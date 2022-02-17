<template>
  <v-container>
  <div>
    <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader']"></v-quagga>
    <br>
  </div>
  <div>
   <h2 class="float-right">Data: {{data}}</h2>
  </div>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VueQuagga from 'vue-quaggajs';

// register component 'v-quagga'
Vue.use(VueQuagga);

export default {
  name: 'VueBarcodeTest',
  data () {
    return {
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: [],
      data: 'Nothing'
    }
  },
  methods: {
    logIt (data) {
      this.data = data
      console.log('detected', data)
    }

  }
}
</script>