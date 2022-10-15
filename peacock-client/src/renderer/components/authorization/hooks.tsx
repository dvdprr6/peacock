import React, { useState, useEffect } from 'react'
import { TAuthTokenDto, TComponentBaseHookImpl } from '@peacock-renderer-models'
import { useDispatch } from 'react-redux'
import { TAppDispatch, saveAuthTokens, activateSpotifyAccessTokens, updateAuthTokens } from '@peacock-renderer-reducers'
import _ from 'lodash'

export function useAuthorization(loading: boolean): TComponentBaseHookImpl<TAuthTokenDto> & {
  openActivate: boolean
  onOpenActivate: (form: TAuthTokenDto) => void
  onCloseActivate: () => void
  onActivate: () => void
} {

  const [openNew, setOpenNew] = useState<boolean>(false)
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [openView, setOpenView] = useState<boolean>(false)
  const [openActivate, setOpenActivate] = useState<boolean>(false)
  const [selectedRow, setSelectedRow] = useState<TAuthTokenDto>({} as TAuthTokenDto)
  const dispatch: TAppDispatch = useDispatch()

  useEffect(() => {
    if(!loading){
      setOpenNew(false)
      //setOpenEdit(false)
      setOpenDelete(false)
      setOpenActivate(false)
    }
  }, [loading])

  const onOpenNew = () => setOpenNew(true)
  const onCloseNew = () => setOpenNew(false)

  const onOpenEdit = (rowData: TAuthTokenDto) => {
    setSelectedRow(rowData)
    setOpenEdit(true)
  }

  const onCloseEdit = () => setOpenEdit(false)

  const onOpenDelete = (rowData: TAuthTokenDto) => {
    setSelectedRow(rowData)
    setOpenDelete(true)
  }

  const onCloseDelete = () => setOpenDelete(false)

  const onOpenView = (rowData: TAuthTokenDto) => {
    setSelectedRow(rowData)
    setOpenView(true)
  }

  const onCloseView = () => setOpenView(false)

  const onOpenActivate = (rowData: TAuthTokenDto) => {
    setSelectedRow(rowData)
    setOpenActivate(true)
  }

  const onCloseActivate = () => setOpenActivate(false)

  const onSubmit = (form: TAuthTokenDto) => {
    const formCopy = { ...form, status: 'NOT ACTIVE' }
    dispatch(saveAuthTokens(formCopy)).then()
  }

  const onEdit = (form: TAuthTokenDto) => {
    dispatch(updateAuthTokens(form)).then(() => setOpenEdit(false))
  }

  const onDelete = () => {
    // setLoading(true)
    // dispatch(removeJobThunk(selectedRow)).then(() => setLoading(false))
  }

  const onActivate = () => {
    dispatch(activateSpotifyAccessTokens(selectedRow)).then()
  }

  return {
    openNew,
    openEdit,
    openDelete,
    openView,
    openActivate,

    selectedRow,

    onOpenNew,
    onCloseNew,
    onOpenEdit,
    onCloseEdit,
    onOpenDelete,
    onCloseDelete,
    onOpenView,
    onCloseView,
    onOpenActivate,
    onCloseActivate,

    onSubmit,
    onEdit,
    onDelete,
    onActivate
  }
}