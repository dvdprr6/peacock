import { ipcRenderer } from 'electron'
import {
  IPC_GET_PLAYER_CURRENT_TRACK,
  GET_CURRENT_TRACK
} from '@peacock-renderer-utils'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCurrentTrack = createAsyncThunk(GET_CURRENT_TRACK, async () => {
  await ipcRenderer.invoke(IPC_GET_PLAYER_CURRENT_TRACK)
  return {} as any
})