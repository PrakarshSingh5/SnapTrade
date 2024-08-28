import {configureStore} from '@reduxjs/toolkit';
import navSlice from './slices/navSlice'

import authslice from './slices/authslice';
export const store = configureStore({
        reducer:{
                auth: authslice,
                nav: navSlice
        }
})