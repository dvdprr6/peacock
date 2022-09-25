import { createSlice } from '@reduxjs/toolkit'
import { getSpotifyTokens, getSpotifyAccess, getAuthTokens } from './actions'
import { SPOTIFY_ACCESS_TOKEN_SLICE, SPOTIFY_ACCESS_SLICE, AUTH_TOKENS_SLICE } from '@peacock-renderer-utils'
import { TSpotifyAccessDto } from '@peacock-renderer-models'

type STATE<T> = {
  value: T,
  isLoading: boolean
}

const INITIAL_STATE = {
  value: {
    clientId: '',
    clientSecret: ''
  },
  isLoading: false
}

const INITIAL_STATE_AUTH_TOKEN: STATE<TSpotifyAccessDto> = {
  value: {
    name: '',
    clientId: '',
    clientSecret: '',
    refreshToken: '',
    accessToken: '',
    url: '',
    scopes: []
  },
  isLoading: false
}

export const authTokenSlice = createSlice({
  name: AUTH_TOKENS_SLICE,
  initialState: INITIAL_STATE_AUTH_TOKEN,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuthTokens.pending, state => {
      state.isLoading = true
    }).addCase(getAuthTokens.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(getAuthTokens.rejected, state => {
      state.isLoading = false
    })
  }
})

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