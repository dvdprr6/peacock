import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createHashHistory } from 'history'
import { connectRouter } from 'connected-react-router'

export const history = createHashHistory()

const rootReducers = combineReducers({
  router: connectRouter(history)
})

export const store = configureStore({
  reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch