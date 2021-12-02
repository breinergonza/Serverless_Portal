// ** React Imports
import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './redux/storeConfig/store'

// ** Toast & ThemeColors Context
import { ToastContainer } from 'react-toastify'
import { ThemeContext } from './utility/context/ThemeColors'

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner'

// ** Ripple Button
import './@core/components/ripple-button'

// ** PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx.min'

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** React Toastify
import '@styles/react/libs/toastify/toastify.scss'

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css'
import './@core/scss/core.scss'
import './assets/scss/style.scss'
import axios from 'axios'
import { SweetAl } from './shared/components/SweetAl'
import { useHistory } from 'react-router'
import Error from './views/Error'
import { ErrorBoundary } from 'react-error-boundary'

// ** Lazy load app
const LazyApp = lazy(() => import('./App'))

axios.interceptors.response.use(
  (response) => new Promise((resolve, reject) => {
      resolve(response)
  }), (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(<Error />)
        })
      }

      if (error.response.status >= 400 || error.response.status >= 500) {
        SweetAl('Error', error.response.data?.msg || 'Something goes wrong !', 'error')
      } else {
        return new Promise((resolve, reject) => {
          reject(<Error />)
        })
      }

    }
)


ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <ThemeContext>
        <ErrorBoundary FallbackComponent={Error}>
            <LazyApp />
        </ErrorBoundary>
        <ToastContainer newestOnTop />
      </ThemeContext>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

