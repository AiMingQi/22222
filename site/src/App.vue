<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
      
      <v-btn 
      plain
      block
      to="/"
      >
        <v-img
          alt="Home Button - NFTW Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/NFTW-white-sq.svg')"
          transition="scale-transition"
          width="40"
                  />
        </v-btn>
      </div>
      <h2 class="ml-3">22222.World</h2>
      <v-spacer></v-spacer>
      
      <v-btn to="/qr-reader" class="ml-3 mx-auto">
        VIP Card Reader
        </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        href="https://NewFronTierWorks.com"
        target="_blank"
        text
      >
        <span class="mr-2">Built By NFTW</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer app color="black"  dark>
      <p>@ 2022 NFTW</p>
      <v-spacer></v-spacer>
      <p>Main Contract: {{currentContractAddress}}</p>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    currentContractAddress: '0x2953399124f0cbb46d2cbacd8a89cf0599974963'
    //
  }),
};
</script>
