// Esta página aparece em TODAS as páginas da aplicação.

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
