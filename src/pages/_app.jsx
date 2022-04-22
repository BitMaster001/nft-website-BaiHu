import '../../styles/globals.css'
import 'components/Sections/Faq.css';
import 'components/Navbar.css';
// import smoothscroll from 'smoothscroll-polyfill';
// import { useEffect } from 'react';
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  // useEffect(() => smoothscroll.polyfill(), [])
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
