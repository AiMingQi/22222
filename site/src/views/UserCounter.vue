<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-2"> 
                    <h2>User Counter</h2>
                    <v-btn @click="getFirebase">Get Firebase</v-btn>
                    <tableland/>
                </v-card> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import Tableland from '../components/Tableland.vue'
  import { initializeApp } from "firebase/app";

  export default {
    name: 'UserCounter',

    components: {
      Tableland,
    },
    methods: {
      getFirebase () {
        const firebaseConfig = {
          apiKey: "AIzaSyCNihpF5XcCatwd62b-zUkI-IWlw_mQC3Q",
          authDomain: "world-bd12b.firebaseapp.com",
          projectId: "world-bd12b",
          storageBucket: "world-bd12b.appspot.com",
          messagingSenderId: "906014027852",
          appId: "1:906014027852:web:9a8af9e857eacb799a44e9"
        };
        const app = initializeApp(firebaseConfig);
        console.log(app)
      }
    }
  }
</script>