import { ipcRenderer } from 'electron'
import {
  IPC_GET_AUTH_TOKENS,
  IPC_GET_AUTHORIZATION,
  IPC_ACTIVATE_AUTHORIZATION,
  GET_SPOTIFY_TOKENS_THUNK,
  GET_SPOTIFY_ACCESS_THUNK,
  GET_AUTH_TOKENS_THUNK
} from '@peacock-renderer-utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TSpotifyAccessDto } from '@peacock-renderer-models'

export const getSpotifyTokens = createAsyncThunk(GET_SPOTIFY_TOKENS_THUNK, async () => {
  const spotifyAccessTokenDto: TSpotifyAccessDto = await ipcRenderer.invoke(IPC_GET_AUTHORIZATION)
  return spotifyAccessTokenDto
})

export const getSpotifyAccess = createAsyncThunk(GET_SPOTIFY_ACCESS_THUNK, async (spotifyAccessDto: TSpotifyAccessDto) => {
  const spotifyAccessTokenDto: TSpotifyAccessDto = await ipcRenderer.invoke(IPC_ACTIVATE_AUTHORIZATION, spotifyAccessDto)
  return spotifyAccessTokenDto
})

export const getAuthTokens = createAsyncThunk(GET_AUTH_TOKENS_THUNK, async () => {
  const authTokensDto: TSpotifyAccessDto = await ipcRenderer.invoke(IPC_GET_AUTH_TOKENS)
  return authTokensDto
})