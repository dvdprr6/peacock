import React, {FC} from 'react'
import { TSpotifyAccessForm } from '@peacock-renderer-models'
import { Controller, useForm } from 'react-hook-form'
import { Button, Grid, Typography } from '@mui/material'
import { TextFieldControl } from '@peacock-renderer-component-commons'

const AuthorizationForm: FC<TSpotifyAccessForm> = (props) => {
  const { clientId, clientSecret } = props
  const { control, handleSubmit, reset } = useForm<TSpotifyAccessForm>()

  const onSubmit = (form: TSpotifyAccessForm) => {

  }

  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={'h5'}>Spotify Authorization</Typography>
      </Grid>
      <Grid item xs={12}>
        <Controller
          defaultValue={clientId}
          name={'clientId'}
          control={control}
          render={({ field: { value, onChange }, formState: { errors } }) =>(
            <TextFieldControl
              value={value}
              label={'Client Id'}
              onChange={onChange}
              type={'password'}
              required
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          defaultValue={clientSecret}
          name={'clientSecret'}
          control={control}
          render={({ field: { value, onChange }, formState: { errors } }) =>(
            <TextFieldControl
              value={value}
              label={'Client Secret'}
              onChange={onChange}
              type={'password'}
              required
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          variant={'outlined'}
          color={'primary'}
          onClick={handleSubmit(onSubmit)}
        >
          Activate
        </Button>
      </Grid>
    </Grid>
  )
}

export default AuthorizationForm