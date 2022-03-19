<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-2">
                    <h2>22222</h2>
                    <v-btn @click="tablelandConnect" dark block>Administer Tableland</v-btn>
                    <br>
                    <v-btn @click="createEventTable" dark block>Create Table</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import { connect } from "@tableland/sdk";

  export default {
    name: 'Tableland',
    data () {
        return {
            connection: {}
        }
    },

    methods: {
        async tablelandConnect () {
            const connection = await connect({
            network: "testnet",
            host: "http://testnet.tableland.network",
            });
            console.log(connection)
            this.connection = connection

        },
        async createEventTable () {
           const { name, id } = await this.connection.create(
            "CREATE TABLE table (name text, id int, primary key (id));"
            );

            console.log(name)
            console.log(id)

        },
        async logEvent (int, id) {
          let time = new Date().toISOString().slice(0, 19).replace('T', ' ');
          let res = await this.tbl.query(`INSERT INTO ${id} (event, name, member_id, time ) VALUES ("CHECK-IN", 'Bobby Tables', ${time});`);
          console.log("got Query", res)
        }
    }

  }
</script>
