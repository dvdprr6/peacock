import React, { FC, useCallback } from 'react'
import { Box, Checkbox, FormControlLabel, Grid } from '@mui/material'

// REFERENCE: https://developer.spotify.com/documentation/general/guides/authorization/scopes/

const IMAGES = 'Images'
const SPOTIFY_CONNECT = 'Spotify Connect'
const PLAYBACK = 'Playback'
const PLAYLISTS = 'Playlists'
const FOLLOW = 'Follow'
const LISTENING_HISTORY = 'Listening History'
const LIBRARY = 'Library'
const USERS = 'Users'

const UGC_IMAGE_UPLOAD = 'ugc-image-upload'
const USER_READ_PLAYBACK_STATE = 'user-read-playback-state'
const USER_MODIFY_PLAYBACK_STATE = 'user-modify-playback-state'
const USER_READ_CURRENTLY_PLAYING = 'user-read-currently-playing'
const APP_REMOTE_CONTROL = 'app-remote-control'
const STREAMING = 'streaming'
const PLAYLIST_READ_PRIVATE = 'playlist-read-private'
const PLAYLIST_READ_COLLABORATIVE = 'playlist-read-collaborative'
const PLAYLIST_MODIFY_PRIVATE = 'playlist-modify-private'
const PLAYLIST_MODIFY_PUBLIC = 'playlist-modify-public'
const USER_FOLLOW_MODIFY = 'user-follow-modify'
const USER_FOLLOW_READ = 'user-follow-read'
const USER_READ_PLAYBACK_POSITION = 'user-read-playback-position'
const USER_TOP_READ = 'user-top-read'
const USER_READ_RECENTLY_PLAYED = 'user-read-recently-played'
const USER_LIBRARY_MODIFY = 'user-library-modify'
const USER_LIBRARY_READ = 'user-library-read'
const USER_READ_EMAIL = 'user-read-email'
const USER_READ_PRIVATE = 'user-read-private'

type CONTROL = {
  value: any
  onChange: (...event: any[]) => void
}

const PlaybackChildren: FC<CONTROL> = (props) => {
  const { value, onChange } = props

  const appRemoteControlOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      const valueCopy = [...value]
      onChange([...valueCopy, APP_REMOTE_CONTROL])
    }else{
      const valueCopy = [...value].filter(item => item !== APP_REMOTE_CONTROL)
      onChange(valueCopy)
    }
  }, [value])

  const streamOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      const valueCopy = [...value]
      onChange([...valueCopy, STREAMING])
    }else{
      const valueCopy = [...value].filter(item => item !== STREAMING)
      onChange(valueCopy)
    }
  }, [value])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
      <FormControlLabel
        control={<Checkbox checked={value.includes(APP_REMOTE_CONTROL)} onChange={appRemoteControlOnChange}/>}
        label={APP_REMOTE_CONTROL}
      />
      <FormControlLabel
        control={<Checkbox checked={value.includes(STREAMING)} onChange={streamOnChange}/>}
        label={STREAMING}
      />
    </Box>
  )
}

export const ScopesCheckboxControl: FC<CONTROL> = (props) => {
  const { value, onChange } = props

  const handleParentOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, children: string[]) => {
    if(event.target.checked){
      const valueCopy = [...value]
      onChange([...valueCopy, ...children])
    }else{
      const valueCopy = [...value].filter(item => !children.includes(item))
      onChange(valueCopy)
    }
  }, [value])

  const handleChildOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, child: string) => {
    if(event.target.checked){
      const valueCopy = [...value]
      onChange([...valueCopy, child])
    }else{
      const valueCopy = [...value].filter(item => item !== child)
      onChange(valueCopy)
    }
  }, [value])

  return(
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value.includes(UGC_IMAGE_UPLOAD)}
              onChange={(e => handleParentOnChange(e, [UGC_IMAGE_UPLOAD]))}
            />
          }
          label={IMAGES}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
          <FormControlLabel
            control={<Checkbox checked={value.includes(UGC_IMAGE_UPLOAD)} onChange={e => handleChildOnChange(e, UGC_IMAGE_UPLOAD)}/>}
            label={UGC_IMAGE_UPLOAD}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value.includes(USER_READ_PLAYBACK_STATE) && value.includes(USER_MODIFY_PLAYBACK_STATE) && value.includes(USER_READ_CURRENTLY_PLAYING)}
              onChange={(e => handleParentOnChange(e, [USER_READ_PLAYBACK_STATE, USER_MODIFY_PLAYBACK_STATE, USER_READ_CURRENTLY_PLAYING]))}
            />
          }
          label={SPOTIFY_CONNECT}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_READ_PLAYBACK_STATE)} onChange={e => handleChildOnChange(e, USER_READ_PLAYBACK_STATE)}/>}
            label={USER_READ_PLAYBACK_STATE}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_MODIFY_PLAYBACK_STATE)} onChange={e => handleChildOnChange(e, USER_MODIFY_PLAYBACK_STATE)}/>}
            label={USER_MODIFY_PLAYBACK_STATE}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_READ_CURRENTLY_PLAYING)} onChange={e => handleChildOnChange(e, USER_READ_CURRENTLY_PLAYING)}/>}
            label={USER_READ_CURRENTLY_PLAYING}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value.includes(APP_REMOTE_CONTROL) && value.includes(STREAMING)}
              onChange={(e => handleParentOnChange(e, [APP_REMOTE_CONTROL, STREAMING]))}
            />
          }
          label={PLAYBACK}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
          <FormControlLabel
            control={<Checkbox checked={value.includes(APP_REMOTE_CONTROL)} onChange={e => handleChildOnChange(e, APP_REMOTE_CONTROL)}/>}
            label={APP_REMOTE_CONTROL}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(STREAMING)} onChange={e => handleChildOnChange(e, STREAMING)}/>}
            label={STREAMING}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value.includes(PLAYLIST_READ_PRIVATE) && value.includes(PLAYLIST_READ_COLLABORATIVE) && value.includes(PLAYLIST_MODIFY_PRIVATE) && value.includes(PLAYLIST_MODIFY_PUBLIC)}
              onChange={(e => handleParentOnChange(e, [PLAYLIST_READ_PRIVATE, PLAYLIST_READ_COLLABORATIVE, PLAYLIST_MODIFY_PRIVATE, PLAYLIST_MODIFY_PUBLIC]))}
            />
          }
          label={PLAYLISTS}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
          <FormControlLabel
            control={<Checkbox checked={value.includes(PLAYLIST_READ_PRIVATE)} onChange={e => handleChildOnChange(e, PLAYLIST_READ_PRIVATE)}/>}
            label={PLAYLIST_READ_PRIVATE}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(PLAYLIST_READ_COLLABORATIVE)} onChange={e => handleChildOnChange(e, PLAYLIST_READ_COLLABORATIVE)}/>}
            label={PLAYLIST_READ_COLLABORATIVE}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(PLAYLIST_MODIFY_PRIVATE)} onChange={e => handleChildOnChange(e, PLAYLIST_MODIFY_PRIVATE)}/>}
            label={PLAYLIST_MODIFY_PRIVATE}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(PLAYLIST_MODIFY_PUBLIC)} onChange={e => handleChildOnChange(e, PLAYLIST_MODIFY_PUBLIC)}/>}
            label={PLAYLIST_MODIFY_PUBLIC}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value.includes(USER_FOLLOW_MODIFY) && value.includes(USER_FOLLOW_READ)}
              onChange={(e => handleParentOnChange(e, [USER_FOLLOW_MODIFY, USER_FOLLOW_READ]))}
            />
          }
          label={FOLLOW}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_FOLLOW_MODIFY)} onChange={e => handleChildOnChange(e, USER_FOLLOW_MODIFY)}/>}
            label={USER_FOLLOW_MODIFY}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_FOLLOW_READ)} onChange={e => handleChildOnChange(e, USER_FOLLOW_READ)}/>}
            label={USER_FOLLOW_READ}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value.includes(USER_READ_PLAYBACK_POSITION) && value.includes(USER_TOP_READ) && value.includes(USER_READ_RECENTLY_PLAYED)}
              onChange={(e => handleParentOnChange(e, [USER_READ_PLAYBACK_POSITION, USER_TOP_READ, USER_READ_RECENTLY_PLAYED]))}
            />
          }
          label={LISTENING_HISTORY}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_READ_PLAYBACK_POSITION)} onChange={e => handleChildOnChange(e, USER_READ_PLAYBACK_POSITION)}/>}
            label={USER_READ_PLAYBACK_POSITION}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_TOP_READ)} onChange={e => handleChildOnChange(e, USER_TOP_READ)}/>}
            label={USER_TOP_READ}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_READ_RECENTLY_PLAYED)} onChange={e => handleChildOnChange(e, USER_READ_RECENTLY_PLAYED)}/>}
            label={USER_READ_RECENTLY_PLAYED}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value.includes(USER_LIBRARY_MODIFY) && value.includes(USER_LIBRARY_READ)}
              onChange={(e => handleParentOnChange(e, [USER_LIBRARY_MODIFY, USER_LIBRARY_READ]))}
            />
          }
          label={LIBRARY}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_LIBRARY_MODIFY)} onChange={e => handleChildOnChange(e, USER_LIBRARY_MODIFY)}/>}
            label={USER_LIBRARY_MODIFY}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_LIBRARY_READ)} onChange={e => handleChildOnChange(e, USER_LIBRARY_READ)}/>}
            label={USER_LIBRARY_READ}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={value.includes(USER_READ_EMAIL) && value.includes(USER_READ_PRIVATE)}
              onChange={(e => handleParentOnChange(e, [USER_LIBRARY_MODIFY, USER_LIBRARY_READ]))}
            />
          }
          label={USERS}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_READ_EMAIL)} onChange={e => handleChildOnChange(e, USER_READ_EMAIL)}/>}
            label={USER_READ_EMAIL}
          />
          <FormControlLabel
            control={<Checkbox checked={value.includes(USER_READ_PRIVATE)} onChange={e => handleChildOnChange(e, USER_READ_PRIVATE)}/>}
            label={USER_READ_PRIVATE}
          />
        </Box>
      </Grid>
    </Grid>
  )
}