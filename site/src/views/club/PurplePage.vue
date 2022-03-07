<template>
  <v-container fluid style="height: 100%;" v-if="$store.state.purpleVerified">

    <v-row class="text-center" height="100%" width="61.8%">
      <v-col  cols="12" sm="12">
        <v-card id="purple" class="pa-5 text-center" height="100%">
          <v-img
          alt="Purple"
          class=" mx-auto"
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
              class="transition-fast-in-fast-out v-card--reveal pa-3"
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
                <h2>Scan QR Code using Membership Validator</h2>
                  <qr-reader :tokenAddress="validTicket"></qr-reader>
             
                <br>
                <p class="text-h5 text--primary">Peace cannot be kept by force; it can only be achieved by understanding. <br><br> - <strong>Albert Einstein</strong></p>
                <br>
                JWT: {{$store.state.verifiedJwt}}

                <v-btn
                  text
                  color="purple"
                  @click="revealPurple = false"
                  dark
                  block
                >
                  Close
                </v-btn>
              </v-card-text>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      
    </v-row>
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
    computed: {
      validTicket () {
        const validTicket = JSON.stringify({
          contractAddress: "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
          tokenAddress: "106728893711997430351499537110311918968148144763278714921562000174585569345539",
          secretPhrase: "Eirene",
          clubColor: "Purple",
          verifiedJwt: this.$store.state.verifiedJwt
        })
        return validTicket
      }
    }
  }
</script>



<style scoped>

#red {background: #c00000;}
#purple {background: purple;}
#gold {background: gold;}


</style>
