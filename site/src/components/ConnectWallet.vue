<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-2"> 
                    <h2>Connect to Wallet that Contains 22222.World NFTs</h2>
                    <v-btn @click="getWallet" dark block>Connect To Wallet</v-btn>
                    <v-btn class="mt-2" @click="openSeaCheck" dark block>Opensea Check</v-btn>
                   <v-card-text> Ethereum Account: {{accounts}}
                   </v-card-text> 
                </v-card> 
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import axios from "axios";

  export default {
    name: 'ConnectWallet',
    data () {
        return {
            accounts: '',
        }
    },

    methods: {
        async openSeaCheck () {
            const options = {
        method: 'GET',
        url: 'https://api.opensea.io/api/v1/asset/0x2953399124f0cbb46d2cbacd8a89cf0599974963/106728893711997430351499537110311918968148144763278714921562000174585569345539/',
        params: {account_address: '0xebF669C22044c2E644cAED139eeC0E66b1D81829'},
        headers: {'X-API-KEY': ''}
        };

        axios.request(options).then(function (response) {
        console.log(response.data);
        }).catch(function (error) {
        console.error(error);
        });                     
            

        },


        async getWallet () {
            var web3 = new Web3(window.ethereum)
                window.ethereum.enable().catch(error => {
                    // User denied account access
                    console.log(error)
                })
            var accounts = await web3.eth.getAccounts();
            this.accounts = accounts[0]
            console.log('this account', this.accounts)
            console.log('web3 accounts', accounts)
            this.checkOwnership(web3)
            
        },
    
        async checkOwnership (web3) {
            var accountAddress = this.accounts[0]
            console.log(accountAddress)
            
            console.log("connected to web3", web3)
            const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/67340a6b8f2e4d1685a1cb0af80f861a')
            
            const seaport = new OpenSeaPort(provider, {
                networkName: Network.Main,
                apiKey: ''
            })
            
            console.log("connected to seaport", seaport)

            const asset = {
                tokenAddress: "0x2953399124f0cbb46d2cbacd8a89cf0599974963", // CryptoKitties
                tokenId: "106728893711997430351499537110311918968148144763278714921562000174585569345539", // Token ID
                }

            const balance = await seaport.getAssetBalance({
            accountAddress, // string
            asset, // Asset
            })

            console.log("balance", balance)

            const ownsToken = balance.greaterThan(0)
            console.log("owns Token!", ownsToken)
        }
    }

  }
</script>