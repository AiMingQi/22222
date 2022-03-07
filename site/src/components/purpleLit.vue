<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
      <v-card>
        <v-btn @click="enterPurple" block color="purple" x-large dark>
          Enter Purple
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
        async enterPurple () {
            await this.getAuthSig();
            await this.requestJwt();
            await this.verifyJwt();
        },
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
              '106728893711997430351499537110311918968148144763278714921562000174585569345539'
            ],
            returnValueTest: {
              comparator: '>',
              value: '0'
            }
          }
        ];
        this.resourceId = {
          baseUrl: '22222.world/#/',
          path: 'purple', // this would normally be your url path, like "/webpage.html" for example
          orgId: "",
          role: "",
          extraData: "purple-opensea-v2-world"
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
        this.$store.state.verifiedJwt = jwt
        this.$store.state.purpleVerified = true
        this.$router.push(payload.path)


      }
    },
  }
</script>