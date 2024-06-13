import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Footer from '@/src/component/Footer/Footer'
import Top from '@/src/component/Top/Top'
import '../styles/style.css'



export default function App({ Component, pageProps }) {
  return (
    // <div style = {{ width : 1000, margin : "0 auto"}}>
    <div>
      <Top/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  
  )
  
  
}
