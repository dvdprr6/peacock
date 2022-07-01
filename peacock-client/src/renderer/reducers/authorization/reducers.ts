import { createSlice } from '@reduxjs/toolkit'
import { getSpotifyTokens, getSpotifyAccess } from './actions'
import { SPOTIFY_ACCESS_TOKEN_SLICE, SPOTIFY_ACCESS_SLICE } from '@peacock-renderer-utils'

const INITIAL_STATE = {
  value: {
    clientId: '',
    clientSecret: ''
  },
  isLoading: false
}

export const spotifyAccessTokenSlice = createSlice({
  name: SPOTIFY_ACCESS_TOKEN_SLICE,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpotifyTokens.pending, state => {
      state.isLoading = true
    }).addCase(getSpotifyTokens.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(getSpotifyTokens.rejected, state => {
      state.isLoading = false
    })
  }
})

export const authorizeSpotifyAccessSlice = createSlice({
  name: SPOTIFY_ACCESS_SLICE,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpotifyAccess.pending, state => {
      state.isLoading = true
    }).addCase(getSpotifyAccess.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(getSpotifyAccess.rejected, state => {
      state.isLoading = false
    })
  }
})