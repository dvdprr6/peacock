import { createSlice } from '@reduxjs/toolkit'
import { getAuthTokens, saveAuthTokens, activateSpotifyAccessTokens, updateAuthTokens, deleteAuthTokens } from './actions'
import { AUTH_TOKENS_SLICE } from '@peacock-renderer-utils'
import { TAuthTokenDto } from '@peacock-renderer-models'
import { STATE } from '../types'

const INITIAL_STATE_AUTH_TOKEN: STATE<TAuthTokenDto> = {
  value: {} as TAuthTokenDto,
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
      state.value = {} as TAuthTokenDto
      state.isLoading = false
    }).addCase(saveAuthTokens.pending, state => {
      state.isLoading = true
    }).addCase(saveAuthTokens.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(saveAuthTokens.rejected, state => {
      state.value = {} as TAuthTokenDto
      state.isLoading = false
    }).addCase(activateSpotifyAccessTokens.pending, state => {
      state.isLoading = true
    }).addCase(activateSpotifyAccessTokens.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(activateSpotifyAccessTokens.rejected, state => {
      state.value = {} as TAuthTokenDto
      state.isLoading = false
    }).addCase(updateAuthTokens.pending, state => {
      state.isLoading = true
    }).addCase(updateAuthTokens.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(updateAuthTokens.rejected, state => {
      state.value = {} as TAuthTokenDto
      state.isLoading = false
    }).addCase(deleteAuthTokens.pending, state => {
      state.isLoading = true
    }).addCase(deleteAuthTokens.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(deleteAuthTokens.rejected, state => {
      state.value = {} as TAuthTokenDto
      state.isLoading = false
    })

  }
})