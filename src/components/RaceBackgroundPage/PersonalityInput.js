import React, { useState } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'


const PersonalityInput = ({ name, placeholder }) => {
    const [formData, setFormData] = setState("");

    const updateForm = (e) => {
        
    }

    return (
        <Form.Field 
            value={formData} 
            onChange={updateForm} 
            onBlur={updateCharacter}
            control={TextArea}
            label={name}
            placeholder={placeholder} 
        />  
    )
}

export default PersonalityInput
