<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-2">
                    <h2>22222</h2>
                    <v-btn @click="tablelandConnect" dark block>Administer Tableland</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import { connect } from "@textile/tableland";

  export default {
    name: 'Tableland',
    data () {
        return {
            tbl: {}
        }
    },

    methods: {
        async tablelandConnect () {
            const tbl = await connect({ network: "testnet" });
            console.log("connected",tbl)
            this.table = tbl
            console.log("vue",this.tbl)

        },
        async createEventTable () {
            let id = await this.tbl.create(`CREATE TABLE events (event text, name text, member_id int, time date, payload text, primary key (id))`);
            console.log("got ID",id)
            //let res = await this.tbl.query(`INSERT INTO ${id} (id, name, time) VALUES (0, 'Bobby Tables', 1645363230811);`);
            //console.log("got Query", res)
            //res = await this.tbl.query(`SELECT * FROM ${id}`);
            //console.log(res)
            const tables = await this.tbl.list();
            console.log("tables", tables)

        },
        async logEvent (id) {
          let time = new Date().toISOString().slice(0, 19).replace('T', ' ');
          let res = await this.tbl.query(`INSERT INTO ${id} (event, name, member_id, time ) VALUES ("CHECK-IN", 'Bobby Tables', ${time});`);
          console.log("got Query", res)
        }
    }

  }
</script>
