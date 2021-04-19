import React from 'react'
import { Form, TextArea, Header } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'


const PersonalityInput = ({ name, placeholder }) => {
    const dispatch = useDispatch();

    const updateForm = (e) => {
        const newName = name.toLowerCase();
        let newObj = {[newName]: e.target.value};
        dispatch(updateCharacter(newObj))
    }

    return (
        <>
        <Header as='h2' textAlign='center' style={{fontFamily: 'Aclonica'}}>{name}</Header>
        <Form.Field
            key={name}
            onChange={updateForm} 
            control={TextArea}
            placeholder={placeholder}
            style={{marginLeft: '3em'}} 
        />  
        </>
    )
}

export default PersonalityInput
