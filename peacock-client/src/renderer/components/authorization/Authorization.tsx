import React, { FC, useState, useEffect } from 'react'
import { Grid, Typography, Button, Divider, IconButton } from '@mui/material'
import { Add, PlayArrow, Edit, Delete, Refresh } from '@mui/icons-material'
import AuthorizationForm from './AuthorizationForm'
import { connector, TPropsFromRedux, TAppDispatch, getAuthTokens } from '@peacock-renderer-reducers'
import { useDispatch } from 'react-redux'
import MaterialTable, { MTableToolbar } from '@material-table/core'
import { MATERIAL_TABLE_ICONS, MATERIAL_TABLE_OPTIONS } from '@peacock-renderer-utils'
import { useAuthorization } from './hooks'

const Authorization: FC<TPropsFromRedux> = (props) => {
  const { authTokens } = props
  const {
    openNew, openEdit, openDelete, openView,
    loading, selectedRow,
    onOpenNew, onCloseNew, onOpenEdit, onCloseEdit, onOpenDelete, onCloseDelete, onOpenView, onCloseView,
    onSubmit, onEdit, onDelete
  } = useAuthorization()
  const dispatch: TAppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getAuthTokens()).then()
  }, [])

  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container direction={'row'} justifyContent={'space-between'}>
          <Typography variant={'h5'} gutterBottom component={'div'}>Authentication</Typography>
          <Button
            onClick={() => onOpenNew()}
            startIcon={<Add />}
            size={'small'}
            variant={'contained'}
            color={'primary'}
          >
            New Auth
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <MaterialTable
          icons={MATERIAL_TABLE_ICONS}
          title={'Auth'}
          isLoading={authTokens.isLoading}
          columns={[
            {
              title: 'Name',
              field: 'name'
            },
            {
              title: 'Client ID',
              field: 'clientId',
            },
            {
              title: 'Client Secret',
              field: 'clientSecret',
            }
          ]}
          data={authTokens.value}
          actions={[
            {
              icon: () => <PlayArrow />,
              tooltip: 'Activate',
              onClick: (event, rowData: any) => undefined
            },
            {
              icon: () => <Edit />,
              tooltip: 'Edit',
              onClick: (event, rowData: any) => undefined
            },
            {
              icon: () => <Delete />,
              tooltip: 'Delete',
              onClick: (event, rowData: any) => undefined
            }
          ]}
          options={MATERIAL_TABLE_OPTIONS}
          onRowClick={(e, rowData: any) => undefined}
          components={{
            Toolbar: props => (
              <div>
                <MTableToolbar {...props} />
                <div style={{padding: '0px 10px', textAlign: 'left'}}>
                  <IconButton onClick={() => undefined}>
                    <Refresh />
                  </IconButton>
                </div>
              </div>
            )
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <AuthorizationForm
          open={openNew}
          onClose={() => onCloseNew()}
          onSubmit={onSubmit}
          title={'Create Auth'}
          loading={authTokens.isLoading}
        />
      </Grid>
    </Grid>
  )
}

export default connector(Authorization)