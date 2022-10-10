type TPrimaryKey = { id?: number }

export type TAuthTokenDto = TPrimaryKey & {
  name: string
  clientId: string
  clientSecret: string
  refreshToken?: string
  accessToken?: string
  status: string
  scopes: TScopeDto[]
}

export type TScopeDto = TPrimaryKey & {
  name: string
}

/** FORMS */

export type TSpotifyAccessForm = TAuthTokenDto

/** MISC */

export type TComponentBaseHookImpl<T> = {
  openNew: boolean
  openEdit: boolean
  openDelete: boolean
  openView: boolean
  selectedRow: T
  onOpenNew: () => void
  onCloseNew: () => void
  onOpenEdit: (rowData: T) => void
  onCloseEdit: () => void
  onOpenDelete: (rowData: T ) => void
  onCloseDelete: () => void
  onOpenView: (rowData: T) => void
  onCloseView: () => void
  onSubmit: (form: T) => void
  onEdit: (form: T) => void
  onDelete: () => void
}