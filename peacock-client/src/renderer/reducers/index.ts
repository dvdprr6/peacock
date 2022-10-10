import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { connect, ConnectedProps } from 'react-redux'
import {
  getAuthTokens,
  saveAuthTokens,
  activateSpotifyAccessTokens,
  authTokenSlice
} from './authorization'

const rootReducers = combineReducers({
  authTokens: authTokenSlice.reducer
})

export const store = configureStore({
  reducer: rootReducers
})

export type TRootState = ReturnType<typeof store.getState>

export type TAppDispatch = typeof store.dispatch

const mapStateToProps = (state: TRootState) => ({
  authTokens: state.authTokens
})

export const connector = connect(mapStateToProps)
export type TPropsFromRedux = ConnectedProps<typeof connector>

export {
  getAuthTokens,
  saveAuthTokens,
  activateSpotifyAccessTokens
}