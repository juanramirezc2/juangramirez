// page/_app.js
import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { GlobalStyles } from 'twin.macro'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
