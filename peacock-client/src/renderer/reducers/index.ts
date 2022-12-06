import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { connect, ConnectedProps } from 'react-redux'
import {
  getAuthTokens,
  saveAuthTokens,
  activateSpotifyAccessTokens,
  updateAuthTokens,
  deleteAuthTokens,
  authTokenSlice
} from './authorization'
import {
  getCurrentTrack,
  currentTrackSlice
} from './player'

const rootReducers = combineReducers({
  authTokens: authTokenSlice.reducer,
  currentTrack: currentTrackSlice.reducer
})

export const store = configureStore({
  reducer: rootReducers
})

export type TRootState = ReturnType<typeof store.getState>

export type TAppDispatch = typeof store.dispatch

const mapStateToProps = (state: TRootState) => ({
  authTokens: state.authTokens,
  currentTrack: state.currentTrack
})

export const connector = connect(mapStateToProps)
export type TPropsFromRedux = ConnectedProps<typeof connector>

export {
  getAuthTokens,
  saveAuthTokens,
  activateSpotifyAccessTokens,
  updateAuthTokens,
  deleteAuthTokens,

  getCurrentTrack
}