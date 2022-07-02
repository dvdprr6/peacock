import React from 'react'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { store } from '@peacock-renderer-reducers'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, DashboardPage, AuthorizationPage, HistoryPage, UserPage } from '@peacock-renderer-components'
import { DASHBOARD_REDIRECT, AUTHORIZATION_REDIRECT, HISTORY_REDIRECT, USER_REDIRECT } from '@peacock-renderer-utils'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DB954'
    },
    secondary: {
      main: '#1DB954'
    },
    background: {
      default: '#303030',
      paper: '#424242'
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#1DB954'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        text: {
          size: '10',
          textTransform: 'lowercase'
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root:{
          color: '#1DB954',
          '&.Mui-checked': {
            color: '#1DB954'
          }
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root:{
          size: 20,
          color:'#1DB954'
        }
      }
    }
  }
})

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={DASHBOARD_REDIRECT} element={<DashboardPage />} />
            <Route path={HISTORY_REDIRECT} element={<HistoryPage />} />
            <Route path={USER_REDIRECT} element={<UserPage />} />
            <Route path={AUTHORIZATION_REDIRECT} element={<AuthorizationPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
