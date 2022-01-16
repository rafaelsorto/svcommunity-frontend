import '@styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {Amplify} from 'aws-amplify'
import awsExports from '../aws-exports'
import {AmplifyProvider, Authenticator} from '@aws-amplify/ui-react'
import Layout from '@modules/Layout'

Amplify.configure(awsExports)

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AmplifyProvider>
      <Authenticator.Provider>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Authenticator.Provider>
    </AmplifyProvider>
  )
}

export default MyApp
