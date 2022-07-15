import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'

// Define a type for the slice state
export interface InitialState
{
  count: number,
  accentColor: string
}

// Define the initial state using that type
const initialState: InitialState = {
  count: 0,
  accentColor: '#1565C0'
}

// `createSlice` will infer the state type from the `initialState` argument
export const commonDataSlice = createSlice({
  name: 'commonData',
  initialState,
  reducers: {

    setCount: (state, action: PayloadAction<InitialState['count']>) =>
    {
      state.count = action.payload
    },

    setAccentColor: (state, action: PayloadAction<InitialState['accentColor']>) =>
    {
      state.accentColor = action.payload
    }
  }
})

export const {setCount, setAccentColor} = commonDataSlice.actions
export const getCount = (state: RootState) => state.common.count
export const getAccentColor = (state: RootState) => state.common.accentColor
export default commonDataSlice.reducer
