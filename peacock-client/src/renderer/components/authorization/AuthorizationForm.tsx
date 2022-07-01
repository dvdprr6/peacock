import React, {FC} from 'react'
import { TSpotifyAccessForm } from '@peacock-renderer-models'
import { Controller, useForm } from 'react-hook-form'
import { Button, Grid, Typography } from '@mui/material'
import { TextFieldControl, Spinner } from '@peacock-renderer-component-commons'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

const schema = yup.object().shape({
  clientId: yup.string().required('Is Required'),
  clientSecret: yup.string().required('Is Required')
})

const AuthorizationForm: FC<{
  onSubmit: (form: TSpotifyAccessForm) => void
  loading: boolean
  initialValues: TSpotifyAccessForm
}> = (props) => {
  const { onSubmit, loading, initialValues } = props
  const { control, handleSubmit } = useForm<TSpotifyAccessForm>({ resolver: yupResolver(schema) })

  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={'h5'}>Spotify Authorization</Typography>
      </Grid>
      <Grid item xs={12}>
        <Controller
          defaultValue={initialValues.clientId}
          name={'clientId'}
          control={control}
          render={({ field: { value, onChange }, formState: { errors } }) =>(
            <TextFieldControl
              value={value}
              label={'Client Id'}
              onChange={onChange}
              type={'password'}
              required
              errors={errors.clientId?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          defaultValue={initialValues.clientSecret}
          name={'clientSecret'}
          control={control}
          render={({ field: { value, onChange }, formState: { errors } }) =>(
            <TextFieldControl
              value={value}
              label={'Client Secret'}
              onChange={onChange}
              type={'password'}
              required
              errors={errors.clientSecret?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          variant={'outlined'}
          color={'primary'}
          disabled={loading}
          onClick={handleSubmit(onSubmit)}
          startIcon={loading ? <Spinner /> : <div></div>}
        >
          Activate
        </Button>
      </Grid>
    </Grid>
  )
}

export default AuthorizationForm