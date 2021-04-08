import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'


const PersonalityInput = ({ name, placeholder }) => {
    const dispatch = useDispatch();
    // console.log(updateCharacter())

    const updateForm = (e) => {
        const newName = name.toLowerCase();
        let newObj = {[newName]: e.target.value};
        // console.log(newObj)
        dispatch(updateCharacter(newObj))
    }

    return (
        <Form.Field 
            onChange={updateForm} 
            control={TextArea}
            label={name}
            placeholder={placeholder} 
        />  
    )
}

export default PersonalityInput
