import { ipcRenderer } from 'electron'
import {
  IPC_GET_AUTH_TOKENS,
  IPC_POST_AUTH_TOKENS,
  GET_AUTH_TOKENS_THUNK,
  POST_AUTH_TOKENS_THUNK
} from '@peacock-renderer-utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TAuthTokenDto } from '@peacock-renderer-models'

export const getAuthTokens = createAsyncThunk(GET_AUTH_TOKENS_THUNK, async () => {
  const authTokensDto: TAuthTokenDto[] = await ipcRenderer.invoke(IPC_GET_AUTH_TOKENS)
  return authTokensDto
})

export const saveAuthTokens = createAsyncThunk(POST_AUTH_TOKENS_THUNK, async (authTokenDto: TAuthTokenDto) => {
  const authTokensDto: TAuthTokenDto[] = await ipcRenderer.invoke(IPC_POST_AUTH_TOKENS, authTokenDto)
  return authTokensDto
})