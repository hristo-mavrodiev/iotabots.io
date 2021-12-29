import * as React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@iotabots/components'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import Web3 from 'web3'
import CardMedia from '@mui/material/CardMedia'
import { BotMeta } from '../interfaces/bot'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const IOTABOTS_ABI = require('../contracts/iotabots.json')

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    web3: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum: any
  }
}

const Iotabots: React.FC = () => {
  const [bots, setBots] = React.useState<Array<any>>([])
  const [errorRetrievingBots, setErrorRetrievingBots] = React.useState(false)
  const context = useWeb3React<Web3Provider>()

  const { account, active } = context

  const IOTABOTS_ADR = '0x3a3c0D4BDAB6d0e9715Fa2eAA852af3038Bec342'

  React.useEffect(() => {
    if (active) {
      // eslint-disable-next-line consistent-return
      const init = async (): Promise<BotMeta[]> => {
        /* eslint-disable */

        const web3 = new Web3(window.web3.currentProvider)
        window.ethereum.on('accountsChanged', function () {
          window.location.reload()
        })
        let contract = new web3.eth.Contract(IOTABOTS_ABI, IOTABOTS_ADR)

        let data
        try {
          data = await contract.methods.walletOfOwner(account).call()
        } catch (e) {
          setErrorRetrievingBots(true)
          console.log(e)
          return new Array<BotMeta>()
        }
        console.log('i', init)

        const items: Array<BotMeta> = await Promise.all(
          data.map(async (i: any) => {
            console.log('token_index', i)

            const metadataUrl = await contract.methods.tokenURI(i).call()

            console.log('metadata_url:', metadataUrl)

            const metadataRaw = await fetch(metadataUrl)
            const metadata = await metadataRaw.json()

            console.log('metadata:', metadata)
            return metadata
          })
        )

        console.log('items:', items)
        setBots(items)
      }
      init()
    }
    return null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])
  return (
    <Box sx={{ marginBottom: '10px', textAlign: 'center' }}>
      <Typography gutterBottom variant='h2'>
        Your IOTABOTS
      </Typography>
      {/* eslint-disable-next-line no-nested-ternary */}
      {errorRetrievingBots ? (
        <Typography gutterBottom variant='h6'>
          There was an error retrieving your IotaBots
        </Typography>
      ) : bots.length === 0 ? (
        <Typography gutterBottom variant='h6'>
          You don&apos;t own any IotaBots yet :(
        </Typography>
      ) : (
        bots.map((bot) => (
          <Grid item key={bot.name} xs={12} sm={12} md={12}>
            <Card>
              <CardMedia
                height='100%'
                component='img'
                image={bot.image}
                alt='IOTABOT'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h6'>
                  {`IOTABOT ${bot.name}`}
                </Typography>
                <Typography gutterBottom variant='body1'>
                  {`DNA ${bot.dna}`}
                </Typography>
                <Typography gutterBottom variant='body1'>
                  {`Edition ${bot.edition}`}
                </Typography>
                <Typography gutterBottom variant='body1'>
                  {`Created on ${new Date(bot.date).toLocaleDateString()}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Box>
  )
}

export default Iotabots
