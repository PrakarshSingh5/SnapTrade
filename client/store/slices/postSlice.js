import {createSlice} from '@reduxjs/toolkit';

const postsSlice=createSlice({
    name: "posts",
    initialState: {
        allPosts:[],
        myPosts:[],
        myFavourite:[],
    },
    reducers: {
        setAllPosts: (state, action)=>{
            state.allPosts= action.payload;
        },
        setMyPosts:(state, action)=> {
            state.myPosts=action.payload;
        },
        setMyFavourites:(state, action)=>{
            state.myFavourite= action.payload;
        }
        
    }

});
export const { setAllPosts, setMyPosts, setMyFavourites}= postsSlice.actions;

export default postsSlice.reducer;