<template>
  <v-container fluid style="height: 100%;" v-if="$store.state.redVerified">
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
                <h2>Scan QR Code using Membership Validator</h2>
                  <qr-reader :tokenAddress="validTicket"></qr-reader>
                <p class="text-h5 text--primary">I want to do with you what spring<br> does with cherry trees. <br><br> - <strong>Pablo Neruda</strong></p>
                <br>
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
      revealRed: false,
      contractAddress: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
      redOpenseaTokenAddress: '106728893711997430351499537110311918968148144763278714921562000172386546089998',
    }),
    computed: {
      validTicket () {
        const validTicket = JSON.stringify({
          contractAddress: "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
          tokenAddress: "106728893711997430351499537110311918968148144763278714921562000172386546089998",
          secretPhrase: "Aphrodite",
          clubColor: "Red",
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
