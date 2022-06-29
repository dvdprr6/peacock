import React, { FC, ReactNode } from 'react'
import { TextField } from '@mui/material'

export const TextFieldControl: FC<{
  value: any
  label: string
  onChange: (...event: any[]) => void
  type?: string
  errors?: string
  required?: boolean
  multiline?: boolean
  rows?: number
  rowsMax?: number
  disabled?: boolean
  readonly?: boolean
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}> = (props) => {
  const {
    value,
    onChange,
    label,
    type,
    errors,
    required,
    multiline,
    rows,
    rowsMax,
    disabled,
    readonly,
    startAdornment,
    endAdornment
  } = props

  return(
    <TextField
      value={value}
      size={'small'}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      type={type}
      variant={'outlined'}
      fullWidth={true}
      color={'secondary'}
      error={errors ? true : false}
      helperText={errors}
      required={required}
      multiline={multiline}
      rows={rows}
      maxRows={rowsMax}
      disabled={disabled}
      InputProps={{
        readOnly: readonly,
        startAdornment:startAdornment,
        endAdornment: endAdornment
      }}
    />
  )
}