<template>
  <v-container fluid style="height: 100%;" >

    <v-row class="text-center" height="100%" width="61.8%" v-if="!$store.state.blackVerified">
      <v-col  cols="12" sm="12">
        <v-card id="black" class="pa-5 text-center" height="100%" dark>
          <v-img
          alt="Black"
          class=" mx-auto"
          contain
          :src="require('@/assets/black-sacred-white.svg')"
          transition="scale-transition"
          width="61.8%"
          @click="revealBlack = true"
          v-show="!revealBlack"
          
        />
        <v-expand-transition>
            <v-card
              v-if="revealBlack"
              class="transition-fast-in-fast-out v-card--reveal pa-3"
              style="height: 100%; width: 100%"
              
            >
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="purple"
                  @click="revealBlack = false"
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
                <v-card dark class="pa-5 mx-auto" width="61%">
                <h2>Scan QR Code using myColoradoID</h2>
                <v-img
                    alt="Home Button - NFTW Logo"
                    class="mx-auto"                            
                    :src="require('@/assets/myColorado.png')"
                    transition="scale-transition"
                    contain
                    width="60%"
                        />
                </v-card>
                  <qr-reader :tokenAddress="myColoradoBase"></qr-reader>
                <br>
                Or <br>
                <br>
                <v-btn :href="myColoradoBase" x-large color="#c00000" dark>Open myColorado App</v-btn>
                <br>
                <br>
                <p class="text-h5 text--primary">Peace cannot be kept by force; it can only be achieved by understanding. <br><br> - <strong>Albert Einstein</strong></p>
                <br>
                JWT: {{$store.state.verifiedJwt}}

                <v-btn
                  text
                  color="purple"
                  @click="revealBlack = false"
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
      revealBlack: false,
      contractAddress: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
      blackOpenseaTokenAddress: '106728893711997430351499537110311918968148144763278714921562000175685080973314',
      myColoradoBase: 'mycolorado://share?Destination=1545&ControlCode22222World&Message=22222.World Verified Member',
    }),
    computed: {
      myColoradoURL () {
        return 'mycolorado://share?Destination=1545&ControlCode22222World&Message=22222.World Verified Member'
      }
    }
  }
</script>



<style scoped>

#red {background: #c00000;}
#purple {background: purple;}
#gold {background: gold;}


</style>
