import { createReducer } from '@reduxjs/toolkit'
import { getAccessTokenAction } from './types'

const initialState = {
  value: {
    clientId: '',
    clientSecret: ''
  }
}

export const authorizationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAccessTokenAction, (state, action) => {
      state.value = action.payload
    })
})