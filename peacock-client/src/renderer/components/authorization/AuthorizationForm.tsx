import React, { FC , useEffect } from 'react'
import { TSpotifyAccessForm } from '@peacock-renderer-models'
import { Controller, useForm } from 'react-hook-form'
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { TextFieldControl, Spinner } from '@peacock-renderer-component-commons'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { ScopesCheckboxControl } from './controls'

const schema = yup.object().shape({
  name: yup.string().required('Is Required'),
  clientId: yup.string().required('Is Required'),
  clientSecret: yup.string().required('Is Required'),
  scopes: yup.array().min(1, 'Is Required')
})

const AuthorizationForm: FC<{
  open: boolean
  onClose: () => void
  title: string
  onSubmit: (form: TSpotifyAccessForm) => void
  loading: boolean
  initialValues?: TSpotifyAccessForm
}> = (props) => {
  const { open, onClose, title, onSubmit, loading, initialValues } = props
  const { control, handleSubmit, reset, setValue } = useForm<TSpotifyAccessForm>({ resolver: yupResolver(schema) })

  useEffect(() => {
    reset()
    setValue('id', initialValues?.id)
    setValue('refreshToken', initialValues?.refreshToken)
    setValue('accessToken', initialValues?.accessToken)
    setValue('status', initialValues?.status || 'NOT ACTIVE')
  }, [initialValues])

  useEffect(() => {
    if(!open){
      reset()
    }
  }, [open])

  return(
    <Dialog open={open} maxWidth={'xl'} fullWidth>
      <DialogTitle>
        <Typography variant={'h5'}>{title}</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              defaultValue={initialValues?.name}
              name={'name'}
              control={control}
              render={({ field: { value, onChange }, formState: { errors } }) => (
                <TextFieldControl
                  value={value}
                  label={'name'}
                  onChange={onChange}
                  required
                  errors={errors.name?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
             defaultValue={initialValues?.clientId}
             name={'clientId'}
             control={control}
             render={({ field: { value, onChange }, formState: { errors } }) => (
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
          <Grid item xs={6}>
            <Controller
              defaultValue={initialValues?.clientSecret}
              name={'clientSecret'}
              control={control}
              render={({ field: { value, onChange }, formState: { errors } }) => (
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
          <Grid item xs={12}>
            <Controller
              defaultValue={initialValues?.scopes || []}
              name={'scopes'}
              control={control}
              render={({ field: { value, onChange }, formState: { errors } }) => (
                <ScopesCheckboxControl value={value} onChange={onChange} error={errors.scopes?.message} />
              )}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          color={'secondary'}
          onClick={() => onClose()}
        >
          Cancel
        </Button>
        <Button
          autoFocus
          color={'secondary'}
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
          startIcon={loading ? <Spinner /> : <div></div>}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AuthorizationForm