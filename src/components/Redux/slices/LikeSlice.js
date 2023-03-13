import { createSlice } from "@reduxjs/toolkit";
let arr =[]
const LikeSlice=createSlice({
    initialState:localStorage.getItem("likeMovies") ? JSON.parse(localStorage.getItem("likeMovies")):[],
    name:'LikeSlice',
    reducers:{
        addLike:(state,action)=>{
          if(arr.includes(action.payload.imdbID)){
            // nothing
          }
          else{
            arr.push(action.payload.imdbID)
            state.push(action.payload)
            return state
          }
        },
        disLike:(state,action)=>{
            return state.filter((movie)=>movie.imdbID !==action.payload.imdbID)
        },
        clearLikes:(state,action)=>{
            return []
        }
       
    }
})
export default LikeSlice.reducer
export const {addLike,disLike,clearLikes} =LikeSlice.actions