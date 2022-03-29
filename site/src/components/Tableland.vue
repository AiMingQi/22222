<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-2">
                    <h2>22222</h2>
                    <v-btn @click="tablelandConnect" dark block>Administer Tableland</v-btn>
                    <br>
                    <v-btn @click="createEventTable" dark block>Create Table</v-btn>
                    <br>
                    <v-btn @click="logEvent" dark block>Log Event</v-btn>
                    <br>
                    <v-btn @click="queryTable" dark block>Query Table</v-btn>
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
            connection: {},
            name: ''
        }
    },

    methods: {
        async tablelandConnect () {
            const connection = await connect({
            network: "testnet",
            host: "https://testnet.tableland.network",
            });
            console.log(connection)
            this.connection = connection

        },
        async createEventTable () {
           const { name } = await this.connection.create(
            "CREATE TABLE events (name text, id int, time text, primary key (id));"
            );

            console.log(name)
            this.name = name

        },
        async logEvent () {
          let time = new Date().toISOString().slice(0, 19).replace('T', ' ');
          console.log(`test`)
          console.log(`INSERT INTO ${this.name} (name, id, time) VALUES ('CHECK-IN', '1', '${time}');`)
          let res = await this.connection.query(`INSERT INTO ${this.name} (name, id, time) VALUES ('CHECK-IN', '1', '${time}');`);
          console.log("got Query", res)
        },
        async insertRecord () {
            const one = await tbl.query(
            `INSERT INTO ${createRes.name} (id, name) VALUES (0, 'Bobby Tables');`
            );

        },
        async queryTable () {
            const { data: { rows, columns }} = await connection.query(`SELECT * FROM ${this.name};`);
        }

       
    }

  }
</script>
