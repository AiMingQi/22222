<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-2"> 
                    <h2>Tableland</h2>
                    <v-btn @click="tablelandConnect" dark block>Login to Tableland</v-btn>
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
        async createTable () {
            
            let id = await this.tbl.create(`CREATE TABLE mytable (name text, id int, primary key (id))`);
            console.log("got ID",id)
            let res = await this.tbl.query(`INSERT INTO ${id} (id, name) VALUES (0, 'Bobby Tables');`);
            console.log("got Query", res)
            res = await this.tbl.query(`SELECT * FROM ${id}`);
            console.log(res)
            const tables = await this.tbl.list();
            console.log("tables", tables)
        }
    }

  }
</script>