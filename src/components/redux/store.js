import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import characterReducer from './characterSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        character: characterReducer
    }
})

export default store