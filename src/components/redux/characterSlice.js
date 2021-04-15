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
        },
        overrideCharacter(state, action) {
            return {
                ...action.payload
            }
        },
        deleteArrayItem(state, action) {
            let result = state[action.payload[0]].filter(item => item !== action.payload[1])
            let resultObj = {[action.payload[0]]: result}
            console.log(resultObj)
            return {
                ...state,
                ...resultObj
            }
        },
        addArrayItem(state, action) {
            if (state[action.payload[0]]){
            state[action.payload[0]].push(action.payload[1])
            } else {
                state[action.payload[0]] = [action.payload[1]]
            }
        }
    }
})

export default characterSlice.reducer;
const updateCharacter = characterSlice.actions.updateCharacter
const overrideCharacter = characterSlice.actions.overrideCharacter
const deleteArrayItem = characterSlice.actions.deleteArrayItem
const addArrayItem = characterSlice.actions.addArrayItem
export { updateCharacter, overrideCharacter, deleteArrayItem, addArrayItem }