import React, { FC, useCallback, useEffect } from 'react'
import { Grid, Typography, Button, Divider, IconButton, ButtonGroup } from '@mui/material'
import { Add, PlayArrow, Edit, Delete, Refresh } from '@mui/icons-material'
import AuthorizationForm from './AuthorizationForm'
import { connector, TPropsFromRedux, TAppDispatch, getAuthTokens } from '@peacock-renderer-reducers'
import { useDispatch } from 'react-redux'
import { useAuthorization } from './hooks'
import { CommonDialog } from  '@peacock-renderer-component-commons'
import _ from 'lodash'

const Authorization: FC<TPropsFromRedux> = (props) => {
  const { authTokens } = props

  const {
    openNew, openEdit, openDelete, openActivate,
    onOpenNew, onCloseNew, onOpenEdit, onCloseEdit, onOpenDelete, onCloseDelete, onOpenActivate, onCloseActivate,
    onSubmit, onEdit, onDelete, onActivate
  } = useAuthorization(authTokens.isLoading)
  const dispatch: TAppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getAuthTokens()).then()
  }, [])

  const onRefresh = useCallback(() => {
    dispatch(getAuthTokens()).then()
  }, [authTokens])

  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container direction={'row'} justifyContent={'space-between'}>
          <Typography variant={'h5'} gutterBottom component={'div'}>Authentication</Typography>
          <ButtonGroup orientation={'horizontal'}>
            <Button
              onClick={() => onOpenNew()}
              startIcon={<Add />}
              size={'small'}
              variant={'contained'}
              color={'primary'}
              disabled={!_.isEmpty(authTokens.value)}
            >
              New Token
            </Button>
            <Button
              onClick={() => onOpenEdit(authTokens.value)}
              startIcon={<Edit />}
              size={'small'}
              variant={'contained'}
              color={'primary'}
              disabled={_.isEmpty(authTokens.value)}
            >
              Edit
            </Button>
            <Button
              onClick={() => onOpenDelete(authTokens.value)}
              startIcon={<Delete />}
              size={'small'}
              variant={'contained'}
              color={'primary'}
              disabled={_.isEmpty(authTokens.value)}
            >
              Delete
            </Button>
            <Button
              key={'four'}
              onClick={() => onOpenActivate(authTokens.value)}
              startIcon={<PlayArrow />}
              size={'small'}
              variant={'contained'}
              color={'primary'}
              disabled={_.isEmpty(authTokens.value)}
            >
              Activate
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      {_.isEmpty(authTokens.value) ? (
        <Grid item xs={12}>
          <Typography variant={'h6'} gutterBottom component={'div'}>No Token Available. Please create one.</Typography>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Typography variant={'subtitle1'} gutterBottom component={'div'}>Name: {authTokens.value.name}</Typography>
          <Typography variant={'subtitle1'} gutterBottom component={'div'}>Client Id: {authTokens.value.clientId}</Typography>
          <Typography variant={'subtitle1'} gutterBottom component={'div'}>Client Secret: {authTokens.value.clientSecret}</Typography>
          <Typography variant={'subtitle1'} gutterBottom component={'div'}>Scopes: {authTokens.value.scopes.map(item => item.name).toString()}</Typography>
          <Typography variant={'subtitle1'} gutterBottom component={'div'}>Status: {authTokens.value.status}</Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <AuthorizationForm
          open={openNew}
          onClose={() => onCloseNew()}
          onSubmit={onSubmit}
          title={'New Spotify Access Tokens'}
          loading={authTokens.isLoading}
        />
      </Grid>
      <Grid item xs={12}>
        <AuthorizationForm
          open={openEdit}
          onClose={() => onCloseEdit()}
          onSubmit={onEdit}
          title={'Edit Spotify Access Tokens'}
          loading={authTokens.isLoading}
          initialValues={authTokens.value}
        />
      </Grid>
      <Grid item xs={12}>
        <CommonDialog
          title={'Delete'}
          description={'Are you sure you want to delete this token?'}
          open={openDelete}
          loading={authTokens.isLoading}
          onClose={onCloseDelete}
          onSubmit={onDelete}
        />
      </Grid>
      <Grid item xs={12}>
        <CommonDialog
          title={'Activate'}
          description={'Are you sure you want to activate?'}
          open={openActivate}
          loading={authTokens.isLoading}
          onClose={onCloseActivate}
          onSubmit={onActivate}
        />
      </Grid>
    </Grid>
  )
}

export default connector(Authorization)