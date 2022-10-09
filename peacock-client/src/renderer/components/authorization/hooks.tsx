import React, { useState, useEffect } from 'react'
import { TAuthTokenDto, TComponentBaseHookImpl } from '@peacock-renderer-models'
import { useDispatch } from 'react-redux'
import { TAppDispatch, saveAuthTokens } from '@peacock-renderer-reducers'

export function useAuthorization(): TComponentBaseHookImpl<TAuthTokenDto> {

  const [openNew, setOpenNew] = useState<boolean>(false)
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [openView, setOpenView] = useState<boolean>(false)
  const [openPlay, setOpenPlay] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedRow, setSelectedRow] = useState<TAuthTokenDto>({} as TAuthTokenDto)
  const dispatch: TAppDispatch = useDispatch()

  useEffect(() => {
    if(!loading){
      setOpenNew(false)
      setOpenEdit(false)
      setOpenDelete(false)
      setOpenPlay(false)
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

  const onOpenPlay = (rowData: TAuthTokenDto) => {
    setSelectedRow(rowData)
    setOpenPlay(true)
  }

  const onClosePlay = () => setOpenPlay(false)

  const onSubmit = (form: TAuthTokenDto) => {
    //console.log(JSON.stringify(form))
    setLoading(true)
    console.log(JSON.stringify(form))
    dispatch(saveAuthTokens(form)).then(() => setLoading(false))
  }

  const onEdit = (form: TAuthTokenDto) => {
    // setLoading(true)
    // dispatch(editJobThunk(form)).then(() => setLoading(false))
  }

  const onDelete = () => {
    // setLoading(true)
    // dispatch(removeJobThunk(selectedRow)).then(() => setLoading(false))
  }

  const onPlay = () => {
    // setLoading(true)
    // dispatch(runJobThunk(selectedRow)).then(() => setLoading(false))
  }

  return {
    openNew,
    openEdit,
    openDelete,
    openView,

    loading,
    selectedRow,

    onOpenNew,
    onCloseNew,
    onOpenEdit,
    onCloseEdit,
    onOpenDelete,
    onCloseDelete,
    onOpenView,
    onCloseView,

    onSubmit,
    onEdit,
    onDelete
  }
}