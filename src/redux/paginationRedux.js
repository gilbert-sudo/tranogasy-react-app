import {configureStore, createSlice} from "@reduxjs/toolkit";

const  pagSlice = createSlice({
    name:"pagination",
    initialState:[
    {currentPage: 1, totalPage: 0}
    ],
    reducers:{
        updateCurrentPage:(state, action) =>{
        state[0].currentPage = action.payload;
        },
        setTotalPage:(state, action) =>{
            const itemsPerPage = 2;
            state[0].totalPage = Math.ceil(action.payload / itemsPerPage);
        }
    }
})
export const {updateCurrentPage, setTotalPage} = pagSlice.actions;
export const pgStore = configureStore({
    reducer:{
        pagination:pagSlice.reducer,
    }
})

