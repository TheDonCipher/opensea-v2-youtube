import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Rinkeby}
      chainRPC={{
       [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/03f54d4484414a39b9751613264f2911'
      }}
      >
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
        
    </ThirdwebProvider>
    )
}

export default MyApp
