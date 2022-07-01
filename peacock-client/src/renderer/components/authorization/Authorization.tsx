import React, { FC, useCallback } from 'react'
import { Grid, Card, CardContent } from '@mui/material'
import AuthorizationForm from './AuthorizationForm'
import { connector, TPropsFromRedux, TAppDispatch, getSpotifyAccess } from '@peacock-renderer-reducers'
import { TSpotifyAccessForm } from '@peacock-renderer-models'
import { useDispatch } from 'react-redux'

const Authorization: FC<TPropsFromRedux> = (props) => {
  const { spotifyAccessToken, authorizeSpotifyAccess } = props
  const dispatch: TAppDispatch = useDispatch()

  const onSubmit = useCallback((form: TSpotifyAccessForm) => {
    dispatch(getSpotifyAccess(form))
  }, [spotifyAccessToken])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card style={{ display: 'flex' }}>
          <CardContent style={{ width: '100%' }}>
            <AuthorizationForm
              onSubmit={onSubmit}
              loading={authorizeSpotifyAccess.isLoading}
              initialValues={spotifyAccessToken.value}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default connector(Authorization)