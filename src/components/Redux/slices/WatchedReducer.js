import { createSlice } from "@reduxjs/toolkit";
let arr=[]
const WatchedSlice =createSlice({
    initialState:localStorage.getItem("watchedMovies")?JSON.parse(localStorage.getItem("watchedMovies")):[],
    name:"addSlice",
    reducers:{
        Watched:(state,action)=>{
            
            if(arr.includes(action.payload.imdbID)){
                // nothing
            }
            else{
                arr.push(action.payload.imdbID)
                state.push(action.payload)
                return state
            }
        },
        deleted:(state,action)=>{
            return state.filter((movie)=> movie.imdbID !== action.payload.imdbID)
        },
        clearWatched:(state,action)=>{
            return []
        }
       
    }
})
export const {Watched,deleted,clearWatched}=WatchedSlice.actions
export default WatchedSlice.reducer