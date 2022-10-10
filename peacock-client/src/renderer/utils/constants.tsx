import { Icons } from '@material-table/core'
import { forwardRef } from 'react'
import {
  AddBox, ArrowDownward,
  Check, ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage, LastPage, Remove,
  SaveAlt, Search, ViewColumn
} from '@mui/icons-material'

/** IPC CONSTANTS */
export const IPC_GET_SPOTIFY_ACCESS_TOKENS = 'IPC_GET_SPOTIFY_ACCESS_TOKENS'
export const IPC_ACTIVATE_SPOTIFY_ACCESS_TOKENS = 'IPC_ACTIVATE_SPOTIFY_ACCESS_TOKENS'
export const IPC_POST_SPOTIFY_ACCESS_TOKENS = 'IPC_POST_SPOTIFY_ACCESS_TOKENS'

/** REDIRECT CONSTANTS */
export const DASHBOARD_REDIRECT = '/dashboard'
export const HISTORY_REDIRECT = '/history'
export const AUTHORIZATION_REDIRECT = '/authorization'
export const USER_REDIRECT = '/user'

/** REDUCER CONSTANTS */
export const AUTH_TOKENS_SLICE = 'authTokens'

/** THUNK CONSTANTS */
export const GET_AUTH_TOKENS_THUNK = 'get/authTokens'
export const POST_AUTH_TOKENS_THUNK = 'post/authTokens'
export const ACTIVATE_AUTH_TOKENS_THUNK = 'activate/authTokens'

export const MATERIAL_TABLE_ICONS: Icons<any> = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
}

export const MATERIAL_TABLE_OPTIONS = {
  actionsColumnIndex: -1,
  pageSize: 10,
  maxBodyHeight: 740,
}