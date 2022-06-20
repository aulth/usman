import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
  <>
  <NextNProgress color='#fb923c' />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
