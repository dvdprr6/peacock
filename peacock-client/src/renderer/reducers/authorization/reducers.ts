import { createSlice } from '@reduxjs/toolkit'
import { getAuthTokens, saveAuthTokens } from './actions'
import { AUTH_TOKENS_SLICE } from '@peacock-renderer-utils'
import { TAuthTokenDto } from '@peacock-renderer-models'

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

const INITIAL_STATE_AUTH_TOKEN: STATE<TAuthTokenDto[]> = {
  value: [],
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
    }).addCase(saveAuthTokens.pending, state => {
      state.isLoading = true
    }).addCase(saveAuthTokens.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(saveAuthTokens.rejected, state => {
      state.isLoading = false
    })
  }
})