import '../styles/globals.css'
import SideBar from "./SideBar"

function MyApp({ Component, pageProps }) {
return (
<>
   <SideBar/>
   <Component {...pageProps} />
</>)
}

export default MyApp
