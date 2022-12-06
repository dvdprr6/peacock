import { createSlice } from '@reduxjs/toolkit'
import { getCurrentTrack } from './actions'
import { CURRENT_TRACK_SLICE } from '@peacock-renderer-utils'
import { STATE } from '../types'

const INITIAL_STATE_CURRENT_TRACK: STATE<any> = {
  value: {} as any,
  isLoading: false
}

export const currentTrackSlice = createSlice({
  name: CURRENT_TRACK_SLICE,
  initialState: INITIAL_STATE_CURRENT_TRACK,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentTrack.pending, state => {
      state.isLoading = true
    }).addCase(getCurrentTrack.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }).addCase(getCurrentTrack.rejected, state => {
      state.value = {} as any
      state.isLoading = false
    })
  }
})