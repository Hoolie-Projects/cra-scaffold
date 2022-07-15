import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'

import commonReducer from './reducers/common'
import {loadState} from './browser-storage'

const reducers = combineReducers({
  common: commonReducer,
})

export const store = configureStore({
  devTools: true,
  reducer: reducers,

  preloadedState: loadState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
