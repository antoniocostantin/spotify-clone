import { configureStore, combineReducers } from '@reduxjs/toolkit'
import songsReducer from '../reducers/songs'
import artistReducer from '../reducers/artist'
import favouriteReducer from '../reducers/favourire'

const bigReducer = combineReducers({
  songs: songsReducer,
  artist: artistReducer,
  favourite: favouriteReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
