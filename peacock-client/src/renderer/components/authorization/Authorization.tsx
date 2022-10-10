import React, { FC, useCallback, useEffect } from 'react'
import { Grid, Typography, Button, Divider, IconButton } from '@mui/material'
import { Add, PlayArrow, Edit, Delete, Refresh } from '@mui/icons-material'
import AuthorizationForm from './AuthorizationForm'
import { connector, TPropsFromRedux, TAppDispatch, getAuthTokens } from '@peacock-renderer-reducers'
import { useDispatch } from 'react-redux'
import MaterialTable, { MTableToolbar } from '@material-table/core'
import { MATERIAL_TABLE_ICONS, MATERIAL_TABLE_OPTIONS } from '@peacock-renderer-utils'
import { useAuthorization } from './hooks'
import { CommonDialog } from  '@peacock-renderer-component-commons'
import { TAuthTokenDto } from '@peacock-renderer-models'

const Authorization: FC<TPropsFromRedux> = (props) => {
  const { authTokens } = props
  const {
    openNew, openEdit, openDelete, openView, openActivate,
    selectedRow,
    onOpenNew, onCloseNew, onOpenEdit, onCloseEdit, onOpenDelete, onCloseDelete, onOpenView, onCloseView, onOpenActivate, onCloseActivate,
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
          title={'Auth Tokens'}
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
            },
            {
              title: 'Status',
              field: 'status',
              render: rowData => <Typography style={rowData.status === 'NOT ACTIVE' ? { color: 'red' } : { color: 'green'}} variant={'caption'} display={'block'} gutterBottom>{rowData.status}</Typography>
            }
          ]}
          data={authTokens.value}
          actions={[
            {
              icon: () => <PlayArrow />,
              tooltip: 'Activate',
              onClick: (event, rowData: any) => onOpenActivate(rowData as TAuthTokenDto)
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
                  <IconButton onClick={() => onRefresh()}>
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