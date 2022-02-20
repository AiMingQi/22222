<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-2"> 
                    <h2>Connect to Wallet that Contains 22222.World NFTs</h2>
                    <v-btn @click="getWallet" dark block>Connect To Wallet</v-btn>
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

  export default {
    name: 'ConnectWallet',
    data () {
        return {
            accounts: '',
        }
    },

    methods: {
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
            const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/')
            
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