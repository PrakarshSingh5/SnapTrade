import {configureStore} from '@reduxjs/toolkit';
import navSlice from './slices/navSlice'
import postSlice from './slices/postSlice'
import orderSlice from './slices/orderSlice'
import authslice from './slices/authslice'


export const store = configureStore({
        reducer:{
                auth: authslice,
                nav: navSlice,
                posts: postSlice,
                order: orderSlice,
        }
})