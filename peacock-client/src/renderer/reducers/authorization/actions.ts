import { ipcRenderer } from 'electron'
import {
  IPC_GET_SPOTIFY_ACCESS_TOKENS,
  IPC_ACTIVATE_SPOTIFY_ACCESS_TOKENS,
  IPC_POST_SPOTIFY_ACCESS_TOKENS,
  GET_AUTH_TOKENS_THUNK,
  POST_AUTH_TOKENS_THUNK,
  ACTIVATE_AUTH_TOKENS_THUNK
} from '@peacock-renderer-utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TAuthTokenDto } from '@peacock-renderer-models'

export const getAuthTokens = createAsyncThunk(GET_AUTH_TOKENS_THUNK, async () => {
  const authTokensDto: TAuthTokenDto[] = await ipcRenderer.invoke(IPC_GET_SPOTIFY_ACCESS_TOKENS)
  return authTokensDto
})

export const saveAuthTokens = createAsyncThunk(POST_AUTH_TOKENS_THUNK, async (authTokenDto: TAuthTokenDto) => {
  const authTokensDto: TAuthTokenDto[] = await ipcRenderer.invoke(IPC_POST_SPOTIFY_ACCESS_TOKENS, authTokenDto)
  return authTokensDto
})

export const activateSpotifyAccessTokens = createAsyncThunk(ACTIVATE_AUTH_TOKENS_THUNK, async (authTokenDto: TAuthTokenDto) => {
  const spotifyAccessTokensDto: TAuthTokenDto[] = await ipcRenderer.invoke(IPC_ACTIVATE_SPOTIFY_ACCESS_TOKENS, authTokenDto)
  return spotifyAccessTokensDto
})