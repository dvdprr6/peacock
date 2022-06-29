import React from 'react'
import { Grid, Card, CardContent } from '@mui/material'
import SettingsForm from './SettingsForm'

const Settings = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card style={{ display: 'flex' }}>
          <CardContent style={{ width: '100%' }}>
            <SettingsForm clientId={'123abc'} clientSecret={'123abc'} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}



export default Settings