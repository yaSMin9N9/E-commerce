
import Layout from '../components/layout/layout'
import"../components/layout/cart.module.css"
import "../components/layout/main-header.module.css"
import "../components/Product.module.css"
import '../styles/globals.css'
import store from "../redux/store"
import { Provider } from 'react-redux';
  function App({ Component, pageProps }) 
  {
  return(<Provider  store={store} >
    <Layout  >
      <Component {...pageProps} />
      </Layout>
    </Provider>)
}
export default App;
