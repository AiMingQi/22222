<template>
  <v-container fluid style="height: 100%;">
  <v-layout fill-height>
    <v-row class="align-stretch text-center" height="100%">
      <v-col  cols="12" sm="12">
        <v-card id="purple" class="d-flex align-stretch pa-5 text-center" height="100%">
          <v-img
          alt="Purple"
          class="shrink mx-auto"
          contain
          :src="require('@/assets/purple-sacred-white.svg')"
          transition="scale-transition"
          width="61.8%"
          @click="revealPurple = true"
          v-show="!revealPurple"
        />
        <v-expand-transition>
            <v-card
              v-if="revealPurple"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%; width: 100%"
            >
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="purple"
                  @click="revealPurple = false"
                  dark
                  block
                >
                  Close
                </v-btn>
              </v-card-actions>
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Peace
                </p>
                <a :href="'https://opensea.io/assets/matic/'+contractAddress+'/'+purpleOpenseaTokenAddress" target="_blank">
                  <qr-reader :tokenAddress="purpleOpenseaTokenAddress"></qr-reader>
                </a>
                <p class="text-h5 text--primary">Peace Cannot Be Kept By Force:<br> It can only be achieved by understanding. <br><br> - <strong>Albert Einstein</strong></p>

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
      purpleOpenseaTokenAddress: '106728893711997430351499537110311918968148144763278714921562000174585569345539',
    }),
  }
</script>



<style scoped>

#red {background: #c00000;}
#purple {background: purple;}
#gold {background: gold;}


</style>
