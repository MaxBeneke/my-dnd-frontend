import React, { useState } from 'react'
import { Segment, Item, Popup, List, Input, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteArrayItem, addArrayItem } from '../redux/characterSlice'

const ListContainer = ({ listVar }) => {
    const character = useSelector((storeState) => storeState.character)
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)
    const [inputState, setInputState] = useState('')

    const handleDelete = (listItem) => {
      dispatch(deleteArrayItem([listVar, listItem]))
    }

    const handleAdd = (e) => {
      e.preventDefault();
      dispatch(addArrayItem([listVar, inputState]))
      setInputState('')
    }

    const editListItems = character[listVar]?.map(listItem => {
        return (
            <List.Item key={listItem}>
              <Popup content='Delete' trigger={<List.Icon onClick={()=> handleDelete(listItem)} name='times circle outline' />} />
              <List.Content>{listItem}</List.Content>
            </List.Item>
        )
    })

    return (
    <Segment onDoubleClick={() => setIsEdit(true)} style={{overflow: 'auto', maxHeight: '40vh'}}>
    <Item.Group>
    
    <Item>
        <Item.Content>
          <Item.Header>
            {listVar?.charAt(0)?.toUpperCase() + listVar.slice(1)} 
            {isEdit && <Button size='small' compact basic color='blue' onClick={()=> setIsEdit(false)}>Accept Changes</Button>}
          </Item.Header>
          <Item.Meta>{!isEdit && 'Double Click to Edit'}</Item.Meta>
            {isEdit ? (
              <>
              <List>
              {editListItems}
              </List>
              <Input
                label={<Button icon='plus square' onClick={handleAdd} />}
                autoFocus='true'
                labelPosition='right'
                placeholder='Add...'
                value={inputState}
                onChange={(e) => setInputState(e.target.value)}
              />
            </>
            ) : (
              <Item.Description>
                {!character[listVar] || character[listVar].length === 0 ? 'None to Show' : character[listVar]?.join(', ')}
            </Item.Description> 
            ) }
        </Item.Content>
      </Item>

      </Item.Group>
      </Segment>
    )
}

export default ListContainer
