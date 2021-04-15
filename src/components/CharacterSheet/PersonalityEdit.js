import React, { useState } from 'react'
import { Item, TextArea, Form } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'

const PersonalityEdit = ({ name }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)
    const character = useSelector((storeState) => storeState.character)
    const nameVar = name.toLowerCase()

    const handleChange = (e) => {
        let newObj = {[nameVar]: e.target.value}
        dispatch(updateCharacter(newObj))
    }

    return (
        <Item>
        <Item.Content>
          <Item.Header>{ name }</Item.Header>
          <Item.Meta>Double Click to Edit</Item.Meta>
          {isEdit ? (
              <Form.Field 
              autoFocus='true'
              onChange={handleChange} 
              control={TextArea}
              value={character[nameVar]}
              onBlur={() => setIsEdit(false)}
          /> )
            : (
            <Item.Description onDoubleClick={() => setIsEdit(true)}>
                {character[nameVar]}
            </Item.Description>
            )}
        </Item.Content>
      </Item>
    )
}

export default PersonalityEdit
