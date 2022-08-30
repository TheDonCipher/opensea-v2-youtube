import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Rinkeby}
      chainRPC={{
       [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/03f54d4484414a39b9751613264f2911'
      }}
      >
        <Component {...pageProps} />
    </ThirdwebProvider>
    )
}

export default MyApp
