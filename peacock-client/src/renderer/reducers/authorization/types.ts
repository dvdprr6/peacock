import { createAction } from '@reduxjs/toolkit'
import { TSpotifyAccessDto } from '@peacock-renderer-models'

export const SPOTIFY_ACCESS_TOKENS_GET_SUCCESS = 'SPOTIFY_ACCESS_TOKENS_GET_SUCCESS'
export const SPOTIFY_ACCESS_TOKENS_ACTIVATE_SUCCESS = 'SPOTIFY_ACCESS_TOKENS_ACTIVATE_SUCCESS'

export const getAccessTokenAction = createAction<TSpotifyAccessDto>(SPOTIFY_ACCESS_TOKENS_GET_SUCCESS)
export const activateAccessTokenAction = createAction<TSpotifyAccessDto>(SPOTIFY_ACCESS_TOKENS_ACTIVATE_SUCCESS)