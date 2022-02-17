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
                <qr-reader tokenAddress="Purple - Member"></qr-reader>
                <p class="text-h5 text--primary">Peace Cannot Be Kept By Force:<br> It can only be achieved by understanding. <br><br> - <strong>Albert Einstein</strong></p>
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
                <qr-reader tokenAddress="Gold - Member"></qr-reader>
                <p class="text-h5 text--primary">Prosperity comes to those who hustle<br> and push their dreams into existence. <br><br> - <strong>Natasha Munson</strong></p>
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
                <qr-reader tokenAddress="Red - Member"></qr-reader>
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
import QrReader from "../components/QrGenerator.vue"

  export default {
    name: 'Home',

    components: {
      QrReader
    },
    data: () => ({
      revealGold: false,
      revealPurple: false,
      revealRed: false,
    }),
  }
</script>

<style scoped>

#red {background: #c00000;}
#purple {background: purple;}
#gold {background: gold;}


</style>
