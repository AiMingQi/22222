<template>
  <v-container fluid style="height: 100%;">
  <v-layout fill-height>
    <v-row class="align-stretch text-center" height="100%">
      <v-col  cols="12" lg="4" md="12" sm="12">
        <v-card id="purple" class="d-flex align-stretch pa-5 text-center" height="100%">
          <v-img
          alt="Purple"
          class="shrink mx-auto"
          contain
          :src="require('../assets/purple-sacred-white.svg')"
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
                <v-btn color="purple" dark :href="'https://opensea.io/assets/matic/'+contractAddress+'/'+purpleOpenseaTokenAddress" target="_blank">
                Visit Opensea to Purchase
                </v-btn>
                
                <a :href="'https://opensea.io/assets/matic/'+contractAddress+'/'+purpleOpenseaTokenAddress" target="_blank">
                  <qr-reader :tokenAddress="'https://opensea.io/assets/matic/'+contractAddress+'/'+purpleOpenseaTokenAddress"></qr-reader>
                </a>
                
                <p class="text-h5 text--primary">Peace cannot be kept by force; it can only be achieved by understanding. <br><br> - <strong>Albert Einstein</strong></p>

                <purple-lit></purple-lit>

              </v-card-text>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col  cols="12" lg="4" md="6" sm="12">
        <v-card id="gold" class="d-flex align-stretch pa-5 text-center" height="100%">
          <v-img
          alt="Gold"
          class="shrink mx-auto"
          contain
          :src="require('../assets/gold-sacred-white.svg')"
          transition="scale-transition"
          width="61.8%"
          @click="revealGold = true"
          v-show="!revealGold"
        />
        <v-expand-transition>
            <v-card
              v-if="revealGold"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%; width: 100%"
            >
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="yellow"
                  @click="revealGold = false"
                  dark
                  block
                >
                  Close
                </v-btn>
              </v-card-actions>
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Prosperity
                </p>
                <v-btn color="yellow" :href="'https://opensea.io/assets/matic/'+contractAddress+'/'+goldOpenseaTokenAddress" target="_blank">
                Visit Opensea to Purchase
                </v-btn>
                <a :href="'https://opensea.io/assets/matic/'+contractAddress+'/'+goldOpenseaTokenAddress" target="_blank">
                  <qr-reader :tokenAddress="goldOpenseaTokenAddress"></qr-reader>
                </a>
                <p class="text-h5 text--primary">Prosperity comes to those who hustle and push their dreams into existence. <br><br> - <strong>Natasha Munson</strong></p>
                <gold-lit></gold-lit>
                

              </v-card-text>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col  cols="12" lg="4" md="6" sm="12">
        <v-card id="red" class="d-flex align-stretch pa-5 text-center" height="100%">
              <v-img
              alt="Red"
              class="shrink mx-auto"
              contain
              :src="require('../assets/red-sacred-white.svg')"
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
                <v-btn color="#c00000" :href="'https://opensea.io/assets/matic/'+contractAddress+'/'+redOpenseaTokenAddress" target="_blank" dark>
                Visit Opensea to Purchase
                </v-btn>
                <a :href="'https://opensea.io/assets/matic/'+contractAddress+'/'+redOpenseaTokenAddress" target="_blank">
                  <qr-reader :tokenAddress="redOpenseaTokenAddress"></qr-reader>
                </a>
                <p class="text-h5 text--primary">I want to do with you what spring does with cherry trees. <br><br> - <strong>Pablo Neruda</strong></p>
                
                <red-lit></red-lit>
              
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
import QrReader from "../components/QrGenerator.vue"
import PurpleLit from "../components/purpleLit.vue"
import GoldLit from "../components/goldLit.vue"
import RedLit from "../components/redLit.vue"
import LitJsSdk from 'lit-js-sdk'

  export default {
    name: 'Home',

    components: {
      QrReader,
      PurpleLit,
      GoldLit,
      RedLit
    },
    data: () => ({
      revealGold: false,
      revealPurple: false,
      revealRed: false,
      contractAddress: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
      goldOpenseaTokenAddress: '106728893711997430351499537110311918968148144763278714921562000173486057717763',
      purpleOpenseaTokenAddress: '106728893711997430351499537110311918968148144763278714921562000174585569345539',
      redOpenseaTokenAddress: '106728893711997430351499537110311918968148144763278714921562000172386546089998',
      listNodeClient: {},
    }),
    created(){
      // With promises
        LitJsSdk.litJsSdkLoadedInALIT()
        this.getLit()
    },
    methods: {
      async getLit () {
        const client = new LitJsSdk.LitNodeClient()
        await client.connect()
        this.litNodeClient = client
      },
      enterPurple () {
        console.log('enterPurple')
      },
      enterGold () {
        console.log('enterGold')
      },
      enterRed () {
        console.log('enterRed')
      },

    }
  }
</script>



<style scoped>

#red {background: #c00000;}
#purple {background: purple;}
#gold {background: gold;}


</style>
