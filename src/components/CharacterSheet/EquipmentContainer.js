import React from 'react'
import { Segment, Item } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const EquipmentContainer = () => {
    const character = useSelector((storeState) => storeState.character)

    return (
    <Segment style={{overflow: 'auto', maxHeight: '40vh'}}>
    <Item.Group>
    
    <Item>
        <Item.Content>
          <Item.Header>Equipment</Item.Header>
            <Item.Description>
                {character?.equipment?.join(', ')}
            </Item.Description>
        </Item.Content>
      </Item>

      </Item.Group>
      </Segment>
    )
}

export default EquipmentContainer
