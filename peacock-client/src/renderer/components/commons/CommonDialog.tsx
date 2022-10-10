import React, { FC } from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Typography, Button
} from '@mui/material'
import Spinner from './Spinner'

const CommonDialog: FC<{
  title: string
  description: string
  open: boolean
  loading: boolean
  onClose: () => void
  onSubmit: () => void
}> = (props) => {
  const { title, description, open, loading, onClose, onSubmit } = props

  return (
    <Dialog open={open} maxWidth={'xl'}>
      <DialogTitle>
        <Typography variant={'h5'}>{title}</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant={'body1'}>{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          color={'secondary'}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          autoFocus
          color={'secondary'}
          onClick={onSubmit}
          disabled={loading}
          startIcon={loading ? <Spinner /> : <div></div>}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CommonDialog