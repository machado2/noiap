import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "G-16GRD2DV99",
    })
  }, [])
  return <Component {...pageProps} />
}
