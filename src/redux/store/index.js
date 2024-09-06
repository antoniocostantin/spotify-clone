import { configureStore, combineReducers } from '@reduxjs/toolkit'
import songsReducer from '../reducers/songs'

const bigReducer = combineReducers({
  songs: songsReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
