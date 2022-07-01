import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import GoToHome from '../components/GoToHome';
function MyApp({ Component, pageProps }) {
  return (
  <>
  <NextNProgress color='#fb923c' />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
