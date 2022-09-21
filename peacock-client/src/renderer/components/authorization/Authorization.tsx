import React, { FC, useCallback, useState, useEffect } from 'react'
import { Grid, Card, CardContent, Typography, Button, Divider } from '@mui/material'
import { Add, PlayArrow } from '@mui/icons-material'
import AuthorizationForm from './AuthorizationForm'
import { connector, TPropsFromRedux, TAppDispatch, getSpotifyAccess } from '@peacock-renderer-reducers'
import { TSpotifyAccessForm } from '@peacock-renderer-models'
import { useDispatch } from 'react-redux'
import MaterialTable, { MTableToolbar } from '@material-table/core'
import { MATERIAL_TABLE_ICONS, MATERIAL_TABLE_OPTIONS } from '@peacock-renderer-utils'
import { useAuthorization } from './hooks'

const Authorization: FC<TPropsFromRedux> = (props) => {
  const { spotifyAccessToken, authorizeSpotifyAccess } = props
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const {
    openNew, openEdit, openDelete, openView,
    loading, selectedRow,
    onOpenNew, onCloseNew, onOpenEdit, onCloseEdit, onOpenDelete, onCloseDelete, onOpenView, onCloseView,
    onEdit, onDelete
  } = useAuthorization()
  const dispatch: TAppDispatch = useDispatch()

  const onSubmit = useCallback((form: TSpotifyAccessForm) => {
    dispatch(getSpotifyAccess(form))
  }, [spotifyAccessToken])

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
          isLoading={refreshing}
          columns={[
            {
              title: 'Client ID',
              field: '',
            },
            {
              title: '',
              field: '',
            }
          ]}
          data={[]}
          actions={[
            {
              icon: () => <PlayArrow />,
              tooltip: 'Activate',
              onClick: (event, rowData: any) => undefined
            }
          ]}
          options={MATERIAL_TABLE_OPTIONS}

        />
      </Grid>
      <Grid item xs={12}>
        <AuthorizationForm
          open={openNew}
          onClose={() => onCloseNew()}
          onSubmit={onSubmit}
          title={'Create Auth'}
          loading={loading}
        />
      </Grid>
    </Grid>
  )

  // return (
  //   <Grid container spacing={2}>
  //     <Grid item xs={12}>
  //       <Card style={{ display: 'flex' }}>
  //         <CardContent style={{ width: '100%' }}>
  //           <AuthorizationForm
  //             onSubmit={onSubmit}
  //             loading={authorizeSpotifyAccess.isLoading}
  //             initialValues={spotifyAccessToken.value}
  //           />
  //         </CardContent>
  //       </Card>
  //     </Grid>
  //   </Grid>
  // )
}

export default connector(Authorization)