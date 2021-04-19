import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        name: null,
        characters: []
    },
    reducers: {
        updateUser: (state, action) => {
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                characters: action.payload.characters
            }
        },
        addCharacter: (state, action) => {
            state.characters.push(action.payload)
        },
        logoutUser: (state) => {
            return {id: null, name: null, characters: []}
        }
    }
})

export default userSlice.reducer;
const updateUser = userSlice.actions.updateUser
const addCharacter = userSlice.actions.addCharacter
const logoutUser = userSlice.actions.logoutUser
export { updateUser, addCharacter, logoutUser }