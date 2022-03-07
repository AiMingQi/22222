<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
      <v-card>
        <h2>Get Lit</h2>    
        {{txHash}}
        <br>
        {{chain}}
        <br>
        {{provisioningStatus}}
        <br>
        {{requestingStatus}}
        <br>
       TokenId: {{tokenId}}
        <br>
        Token Address: {{tokenAddress}}
        <br>
        authSig: {{authSig}}
        <br>
        ResourceId {{resourceId}}
        <br>
        Access Control {{accessControlConditions}}
        <br>
        JWT {{jwt}}
        <br>
        <v-btn @click="getLit" block dark>
          Get Lit
        </v-btn>
        <v-btn @click="getAuthSig" block dark>
          Get authSig
        </v-btn>
        <v-btn @click="mintNft" block>
          Mint Token
        </v-btn>
        <v-btn @click="provisionAccess" block dark>
          Provision Access
        </v-btn>
        <v-btn @click="requestJwt" block>
          Request JWT
        </v-btn>
        <v-btn @click="verifyJwt" block dark>
          Verify JWT
        </v-btn>
        <v-btn @click="findLits" block dark>
         Find LITS
        </v-btn>
      </v-card>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>

import LitJsSdk from 'lit-js-sdk'
 
  export default {
    name: 'ConnectLitNetwork',
    data: () => ({
      txHash: 'no txHash',
      chain: 'polygon',
      provisioningStatus: 'not provisioning',
      requestingStatus: 'not requesting',
      mintingAddress: 'no minting address',
      listNodeClient: {},
      authSig: 'no authSig',
      tokenId: 'no tokenID',
      tokenAddress: 'no token Address',
      knowntokenID: '0x54257a1b2cccd749f896673640f87d9856764df0614fb0483a898258e27a85d5',
      accessControlConditions: [],
      resourceId: {},
      jwt: {},     

    }),
    created(){
      // With promises
        LitJsSdk.litJsSdkLoadedInALIT()
        this.getLit()
    },
    methods: {
      async getLit () {
        const client = new LitJsSdk.LitNodeClient()
        await client.connect()
        this.litNodeClient = client
        this.accessControlConditions = [
          {
            contractAddress: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
            standardContractType: 'ERC1155',
            chain: 'polygon',
            method: 'balanceOf',
            parameters: [
              ':userAddress',
              '106728893711997430351499537110311918968148144763278714921562000173486057717763'
            ],
            returnValueTest: {
              comparator: '>',
              value: '0'
            }
          }
        ];
        this.resourceId = {
          baseUrl: '22222.world/#/',
          path: 'gold', // this would normally be your url path, like "/webpage.html" for example
          orgId: "",
          role: "",
          extraData: "gold-opensea-v2-world",
          permanant: false
        }
      },
      async getAuthSig () {
        const authSig = await LitJsSdk.checkAndSignAuthMessage({chain: 'polygon'})
        this.authSig = authSig
      },
      async findLits () {
        const litList = await LitJsSdk.findLITs({chain: 'polygon', accountAddress: this.authSig.address})
        console.log(litList)
      },
      async mintNft () {
          const {
          txHash,
          tokenId,
          tokenAddress,
          mintingAddress,
          authSig
        } = await LitJsSdk.mintLIT({ chain: this.chain, quantity: 1 })
        this.tokenId = tokenId
        this.tokenAddress = tokenAddress
        this.authSig = authSig
        this.txHash = txHash
        this.mintingAddress = mintingAddress
      },

      async provisionAccess () {
        this.provisioningStatus = 'Provisioning, please wait...'
        console.log(this.accessControlConditions);
        this.getAuthSig();

        await this.litNodeClient.saveSigningCondition({
          accessControlConditions: this.accessControlConditions,
          chain: this.chain,
          authSig: this.authSig,
          resourceId: this.resourceId
        })

        this.provisioningStatus = 'Provisioned!'
      },
      async requestJwt () {
        this.requestingStatus = 'Requesting JWT, please wait...'
        const jwt = await this.litNodeClient.getSignedToken({
          accessControlConditions: this.accessControlConditions,
          chain: this.chain,
          authSig: this.authSig,
          resourceId: this.resourceId
        }) 
        console.log(jwt)
        this.jwt = jwt

        this.requestingStatus = 'JWT obtained, please wait...' + this.jwt
      },
      async verifyJwt () {
        let jwt = this.jwt
        // const data = await fetch('/verify?jwt=' + this.jwt).then(resp => resp.json())
        const { verified, header, payload } = LitJsSdk.verifyJwt( { jwt } )
        console.log(verified)
        console.log(header)
        console.log(payload)
        this.$router.push(payload.path)


      }
    },
  }
</script>