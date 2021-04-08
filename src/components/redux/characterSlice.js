import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
    name: 'character',
    initialState: {},
    reducers: {
        updateCharacter(state, action) {  
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export default characterSlice.reducer;
const updateCharacter = characterSlice.actions.updateCharacter
export { updateCharacter }