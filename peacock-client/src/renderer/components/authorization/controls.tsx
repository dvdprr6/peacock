import React, { FC, useCallback } from 'react'
import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { TScopeDto } from '@peacock-renderer-models'
import _ from 'lodash'

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
  value: TScopeDto[]
  onChange: (...event: any[]) => void
  error?: string
}

export const ScopesCheckboxControl: FC<CONTROL> = (props) => {
  const { value, onChange, error } = props

  const handleParentOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, children: string[]) => {
    if(event.target.checked){
      const result = children.map(item => ({ name: item }))
      const newValue = _.uniqBy([...value, ...result], 'name')
      onChange(newValue)
    }else{
      const result = value.filter(item => !children.includes(item.name))
      onChange(result)
    }
  }, [value])

  const handleChildOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, child: string) => {
    if(event.target.checked){
      const result = { name: child }
      onChange([...value, result])
    }else{
      const result = value.filter(item => item.name !== child)
      onChange(result)
    }
  }, [value])

  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={'h6'} gutterBottom component={'div'}>Scopes:</Typography>
        <Typography style={{ color: 'red' }} variant={'caption'} display={'block'} gutterBottom>{error}</Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value.find(item => item.name === UGC_IMAGE_UPLOAD)}
              onChange={(e => handleParentOnChange(e, [UGC_IMAGE_UPLOAD]))}
            />
          }
          label={IMAGES}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === UGC_IMAGE_UPLOAD)} onChange={e => handleChildOnChange(e, UGC_IMAGE_UPLOAD)} />
            }
            label={UGC_IMAGE_UPLOAD}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value.find(item => item.name === USER_READ_PLAYBACK_STATE) && !!value.find(item => item.name === USER_MODIFY_PLAYBACK_STATE) && !!value.find(item => item.name === USER_READ_CURRENTLY_PLAYING)}
              onChange={(e => handleParentOnChange(e, [USER_READ_PLAYBACK_STATE, USER_MODIFY_PLAYBACK_STATE, USER_READ_CURRENTLY_PLAYING]))}
            />
          }
          label={SPOTIFY_CONNECT}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_READ_PLAYBACK_STATE)} onChange={e => handleChildOnChange(e, USER_READ_PLAYBACK_STATE)}/>}
            label={USER_READ_PLAYBACK_STATE}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_MODIFY_PLAYBACK_STATE)} onChange={e => handleChildOnChange(e, USER_MODIFY_PLAYBACK_STATE)}/>}
            label={USER_MODIFY_PLAYBACK_STATE}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_READ_CURRENTLY_PLAYING)} onChange={e => handleChildOnChange(e, USER_READ_CURRENTLY_PLAYING)}/>}
            label={USER_READ_CURRENTLY_PLAYING}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value.find(item => item.name === APP_REMOTE_CONTROL) && !!value.find(item => item.name === STREAMING)}
              onChange={(e => handleParentOnChange(e, [APP_REMOTE_CONTROL, STREAMING]))}
            />
          }
          label={PLAYBACK}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === APP_REMOTE_CONTROL)} onChange={e => handleChildOnChange(e, APP_REMOTE_CONTROL)}/>}
            label={APP_REMOTE_CONTROL}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === STREAMING)} onChange={e => handleChildOnChange(e, STREAMING)}/>}
            label={STREAMING}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value.find(item => item.name === PLAYLIST_READ_PRIVATE) && !!value.find(item => item.name === PLAYLIST_READ_COLLABORATIVE) && !!value.find(item => item.name === PLAYLIST_MODIFY_PRIVATE) && !!value.find(item => item.name === PLAYLIST_MODIFY_PUBLIC)}
              onChange={(e => handleParentOnChange(e, [PLAYLIST_READ_PRIVATE, PLAYLIST_READ_COLLABORATIVE, PLAYLIST_MODIFY_PRIVATE, PLAYLIST_MODIFY_PUBLIC]))}
            />
          }
          label={PLAYLISTS}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === PLAYLIST_READ_PRIVATE)} onChange={e => handleChildOnChange(e, PLAYLIST_READ_PRIVATE)}/>}
            label={PLAYLIST_READ_PRIVATE}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === PLAYLIST_READ_COLLABORATIVE)} onChange={e => handleChildOnChange(e, PLAYLIST_READ_COLLABORATIVE)}/>}
            label={PLAYLIST_READ_COLLABORATIVE}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === PLAYLIST_MODIFY_PRIVATE)} onChange={e => handleChildOnChange(e, PLAYLIST_MODIFY_PRIVATE)}/>}
            label={PLAYLIST_MODIFY_PRIVATE}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === PLAYLIST_MODIFY_PUBLIC)} onChange={e => handleChildOnChange(e, PLAYLIST_MODIFY_PUBLIC)}/>}
            label={PLAYLIST_MODIFY_PUBLIC}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value.find(item => item.name === USER_FOLLOW_MODIFY) && !!value.find(item => item.name === USER_FOLLOW_READ)}
              onChange={(e => handleParentOnChange(e, [USER_FOLLOW_MODIFY, USER_FOLLOW_READ]))}
            />
          }
          label={FOLLOW}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_FOLLOW_MODIFY)} onChange={e => handleChildOnChange(e, USER_FOLLOW_MODIFY)}/>}
            label={USER_FOLLOW_MODIFY}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_FOLLOW_READ)} onChange={e => handleChildOnChange(e, USER_FOLLOW_READ)}/>}
            label={USER_FOLLOW_READ}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value.find(item => item.name === USER_READ_PLAYBACK_POSITION) && !!value.find(item => item.name === USER_TOP_READ) && !!value.find(item => item.name === USER_READ_RECENTLY_PLAYED)}
              onChange={(e => handleParentOnChange(e, [USER_READ_PLAYBACK_POSITION, USER_TOP_READ, USER_READ_RECENTLY_PLAYED]))}
            />
          }
          label={LISTENING_HISTORY}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_READ_PLAYBACK_POSITION)} onChange={e => handleChildOnChange(e, USER_READ_PLAYBACK_POSITION)}/>}
            label={USER_READ_PLAYBACK_POSITION}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_TOP_READ)} onChange={e => handleChildOnChange(e, USER_TOP_READ)}/>}
            label={USER_TOP_READ}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_READ_RECENTLY_PLAYED)} onChange={e => handleChildOnChange(e, USER_READ_RECENTLY_PLAYED)}/>}
            label={USER_READ_RECENTLY_PLAYED}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value.find(item => item.name === USER_LIBRARY_MODIFY) && !!value.find(item => item.name === USER_LIBRARY_READ)}
              onChange={(e => handleParentOnChange(e, [USER_LIBRARY_MODIFY, USER_LIBRARY_READ]))}
            />
          }
          label={LIBRARY}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_LIBRARY_MODIFY)} onChange={e => handleChildOnChange(e, USER_LIBRARY_MODIFY)}/>}
            label={USER_LIBRARY_MODIFY}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_LIBRARY_READ)} onChange={e => handleChildOnChange(e, USER_LIBRARY_READ)}/>}
            label={USER_LIBRARY_READ}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value.find(item => item.name === USER_READ_EMAIL) && !!value.find(item => item.name === USER_READ_PRIVATE)}
              onChange={(e => handleParentOnChange(e, [USER_LIBRARY_MODIFY, USER_LIBRARY_READ]))}
            />
          }
          label={USERS}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_READ_EMAIL)} onChange={e => handleChildOnChange(e, USER_READ_EMAIL)}/>}
            label={USER_READ_EMAIL}
          />
          <FormControlLabel
            control={<Checkbox checked={!!value.find(item => item.name === USER_READ_PRIVATE)} onChange={e => handleChildOnChange(e, USER_READ_PRIVATE)}/>}
            label={USER_READ_PRIVATE}
          />
        </Box>
      </Grid>
    </Grid>
  )
}