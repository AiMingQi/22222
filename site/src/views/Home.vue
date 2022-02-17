<template>
  <v-container fluid style="height: 100%;">
  <v-layout fill-height>
    <v-row class="align-stretch text-center" height="100%">
      <v-col  cols="12" lg="4" md="12" sm="12">
        <v-card id="gold" class="d-flex align-stretch pa-3 text-center" height="100%">
          <v-img
          alt="Gold"
          class="shrink mx-auto"
          contain
          :src="require('../assets/gold-sacred-white.svg')"
          transition="scale-transition"
          width="61.8%"
        />
        </v-card>
      </v-col>
      <v-col  cols="12" lg="4" md="6" sm="12">
        <v-card id="purple" class="d-flex align-stretch pa-3 text-center" height="100%">
          <v-img
          alt="Purple"
          class="shrink mx-auto"
          contain
          :src="require('../assets/purple-sacred-white.svg')"
          transition="scale-transition"
          width="61.8%"
        />
        
        </v-card>
      </v-col>
      <v-col  cols="12" lg="4" md="6" sm="12">
        <v-card id="red" class="d-flex align-stretch pa-3 text-center" height="100%">
          <v-img
          alt="Red"
          class="shrink mx-auto"
          contain
          :src="require('../assets/red-sacred-white.svg')"
          transition="scale-transition"
          width="61.8%"
        />
      
        </v-card>
      </v-col>
    </v-row>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
  }
</script>

<style scoped>

#red {background: #c00000;}
#purple {background: purple;}
#gold {background: gold;}


</style>
