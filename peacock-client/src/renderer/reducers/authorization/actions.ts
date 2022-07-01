import { ipcRenderer } from 'electron'
import { getAccessTokenAction, activateAccessTokenAction } from './types'
import { IPC_GET_AUTHORIZATION, IPC_ACTIVATE_AUTHORIZATION } from '@peacock-renderer-utils'
import { PayloadAction } from '@reduxjs/toolkit'
import { TSpotifyAccessDto } from '@peacock-renderer-models'

export function getSpotifyAccessTokens(): Promise<PayloadAction<TSpotifyAccessDto>>{
  return new Promise<PayloadAction<TSpotifyAccessDto>>(async resolve => {
    try{
      const spotifyAccessTokenDto: TSpotifyAccessDto = await ipcRenderer.invoke(IPC_GET_AUTHORIZATION)

      resolve(getAccessTokenAction(spotifyAccessTokenDto))
    }catch(e){
      console.log(e)
    }
  })
}

export function activateSpotifyAccess(spotifyAccessDto: TSpotifyAccessDto): Promise<PayloadAction<TSpotifyAccessDto>>{
  return new Promise<PayloadAction<TSpotifyAccessDto>>(async resolve => {
    try{
      const spotifyAccessTokenDto = await ipcRenderer.invoke(IPC_ACTIVATE_AUTHORIZATION, spotifyAccessDto)
      resolve(activateAccessTokenAction(spotifyAccessTokenDto))
    }catch(e){
      console.log(e)
    }
  })
}

