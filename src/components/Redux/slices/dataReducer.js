import { createSlice } from "@reduxjs/toolkit";
let arr=[]
const dataSlice =createSlice({
    initialState:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],
    name:"addSlice",
    reducers:{
        
        addMovie:(state,action)=>{
           
            if(arr.includes(action.payload.imdbID)){
                // nothing
            }
            else{
              arr.push(action.payload.imdbID)
                state.push(action.payload)
                return state
            }
        },
        deleteMovie:(state,action)=>{
            return state.filter((movie) => movie.imdbID !== action.payload.imdbID);
        },
        clearWatchList:(state,action)=>{
            return []
        }
    }
})
export const {addMovie,deleteMovie,clearWatchList}=dataSlice.actions
export default dataSlice.reducer