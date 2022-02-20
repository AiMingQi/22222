<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-2"> 
                    <h2>User Counter</h2>
                    <tableland/>
                    <connect-wallet></connect-wallet>
                </v-card> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import Tableland from '../components/Tableland.vue'
  import ConnectWallet from '../components/ConnectWallet.vue'

  export default {
    name: 'UserCounter',

    components: {
      Tableland,
      ConnectWallet,
    },
  }
</script>