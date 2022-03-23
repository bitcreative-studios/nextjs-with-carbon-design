import '~styles/globals/index.scss'
import { AppProps } from 'next/app'

const NextApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default NextApp
