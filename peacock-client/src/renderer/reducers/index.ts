import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { connect, ConnectedProps } from 'react-redux'
import {
  getSpotifyAccessTokens,
  activateSpotifyAccess,
  authorizationReducer
} from './authorization'

const rootReducers = combineReducers({
  authorization: authorizationReducer
})

export const store = configureStore({
  reducer: rootReducers
})

export type TRootState = ReturnType<typeof store.getState>

export type TAppDispatch = typeof store.dispatch

const mapStateToProps = (state: TRootState) => ({
  spotifyAccessTokens: state.authorization.value
})

export const connector = connect(mapStateToProps)
export type TPropsFromRedux = ConnectedProps<typeof console>

export {
  getSpotifyAccessTokens,
  activateSpotifyAccess
}