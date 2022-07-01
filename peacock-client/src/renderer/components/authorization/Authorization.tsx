import React from 'react'
import { Grid, Card, CardContent } from '@mui/material'
import AuthorizationForm from './AuthorizationForm'

const Authorization = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card style={{ display: 'flex' }}>
          <CardContent style={{ width: '100%' }}>
            <AuthorizationForm clientId={'123abc'} clientSecret={'123abc'} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Authorization