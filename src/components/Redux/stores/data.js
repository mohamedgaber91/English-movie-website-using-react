import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../slices/dataReducer'
import WatchedReducer from "../slices/WatchedReducer"
import LikeReducer from "../slices/LikeSlice"
export const store = configureStore({
  reducer: {
    whatchlist:dataReducer,
    watched:WatchedReducer,
    likeMovies:LikeReducer
  },
})