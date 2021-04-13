import React from 'react'
import { Segment, Item } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const ProficiencyContainer = () => {
    const character = useSelector((storeState) => storeState.character)
    
    return (
    <Segment style={{overflow: 'auto', maxHeight: '40vh'}}>
    <Item.Group>
    
    <Item>
        <Item.Content>
          <Item.Header>Languages</Item.Header>
            <Item.Description>
                {character?.languages?.join(', ')}
            </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content>
          <Item.Header>Traits</Item.Header>
            <Item.Description>
                {character?.traits?.join(', ')}
            </Item.Description>
        </Item.Content>
      </Item>
    
    </Item.Group>
    </Segment>
    )
}

export default ProficiencyContainer
