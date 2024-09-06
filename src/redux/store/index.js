import { configureStore, combineReducers } from '@reduxjs/toolkit'
import songsReducer from '../reducers/songs'
import artistReducer from '../reducers/artist'
import favouriteReducer from '../reducers/favourire'
import playerReducer from '../reducers/player'

const bigReducer = combineReducers({
  songs: songsReducer,
  artist: artistReducer,
  favourite: favouriteReducer,
  player: playerReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
