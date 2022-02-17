<template>
  <v-container fluid style="height: 100%;">
  <v-layout fill-height>
    <v-row class="align-stretch text-center" height="100%">
      <v-col  cols="12" lg="4" md="12" sm="12">
        <v-card id="gold" class="d-flex align-stretch pa-3 text-center" height="100%">
          <h1 class="mx-auto my-auto">GOLD</h1>
        </v-card>
      </v-col>
      <v-col  cols="12" lg="4" md="6" sm="12">
        <v-card id="purple" class="d-flex align-stretch pa-3 text-center" height="100%">
          <h1 class="mx-auto my-auto">PURPLE</h1>
        </v-card>
      </v-col>
      <v-col  cols="12" lg="4" md="6" sm="12">
        <v-card id="red" class="d-flex align-stretch pa-3 text-center" height="100%">
          <h1 class="mx-auto my-auto">RED</h1>
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
