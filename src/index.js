import { render } from 'react-dom'
import { CookiesProvider } from 'react-cookie';
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

render(
  <CookiesProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CookiesProvider>,
  document.getElementById('root')
)
