import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { connect, ConnectedProps } from 'react-redux'
import {
  getSpotifyTokens,
  getSpotifyAccess,
  getAuthTokens,
  spotifyAccessTokenSlice,
  authorizeSpotifyAccessSlice,
  authTokenSlice
} from './authorization'

const rootReducers = combineReducers({
  spotifyAccessToken: spotifyAccessTokenSlice.reducer,
  authorizeSpotifyAccess: authorizeSpotifyAccessSlice.reducer,
  authToken: authTokenSlice.reducer
})

export const store = configureStore({
  reducer: rootReducers
})

export type TRootState = ReturnType<typeof store.getState>

export type TAppDispatch = typeof store.dispatch

const mapStateToProps = (state: TRootState) => ({
  spotifyAccessToken: state.spotifyAccessToken,
  authorizeSpotifyAccess: state.authorizeSpotifyAccess,
  authToken: state.authToken,
})

export const connector = connect(mapStateToProps)
export type TPropsFromRedux = ConnectedProps<typeof connector>

export {
  getSpotifyAccess,
  getSpotifyTokens,
  getAuthTokens
}