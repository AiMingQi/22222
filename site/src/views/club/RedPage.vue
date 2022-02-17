<template>
  <v-container fluid style="height: 100%;">
  <v-layout fill-height>
    <v-row class="align-stretch text-center" height="100%">
      <v-col  cols="12" sm="12">
        <v-card id="red" class="d-flex align-stretch pa-5 text-center" height="100%">
          <v-img
          alt="Red"
          class="shrink mx-auto"
          contain
          :src="require('@/assets/red-sacred-white.svg')"
          transition="scale-transition"
          width="61.8%"
          @click="revealRed = true"
          v-show="!revealRed"
        />
        <v-expand-transition>
            <v-card
              v-if="revealRed"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%; width: 100%"
            >
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="#c00000"
                  @click="revealRed = false"
                  dark
                  block
                >
                  Close
                </v-btn>
              </v-card-actions>
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Love
                </p>
                <a :href="'https://opensea.io/assets/matic/'+contractAddress+'/'+redOpenseaTokenAddress" target="_blank">
                  <qr-reader :tokenAddress="redOpenseaTokenAddress"></qr-reader>
                </a>
                <p class="text-h5 text--primary">I want to do with you what spring<br> does with cherry trees. <br><br> - <strong>Pablo Neruda</strong></p>

              </v-card-text>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      
    </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import QrReader from "@/components/QrGenerator.vue"

  export default {
    name: 'Home',

    components: {
      QrReader
    },
    data: () => ({
      revealGold: false,
      revealPurple: false,
      revealRed: false,
      contractAddress: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
      goldOpenseaTokenAddress: '67201874612487930781359947374147540542883839083498399740011074558494592991234',
      purpleOpenseaTokenAddress: '67201874612487930781359947374147540542883839083498399740011074559594104619018',
      redOpenseaTokenAddress: '67201874612487930781359947374147540542883839083498399740011074560693616246794',
    }),
  }
</script>



<style scoped>

#red {background: #c00000;}
#purple {background: purple;}
#gold {background: gold;}


</style>
