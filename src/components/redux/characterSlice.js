import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
    name: 'character',
    initialState: {},
    reducers: {
        updateCharacter: (state, action) => {
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                characters: action.payload.characters}
        }
    }
})

export default characterSlice.reducer;
const updateCharacter = characterSlice.actions.updateCharacter
export { updateCharacter }