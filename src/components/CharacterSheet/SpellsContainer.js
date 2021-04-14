import React from 'react'
import { Segment, Item } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const SpellsContainer = () => {
    const character = useSelector((storeState) => storeState.character)

    return (
    <Segment style={{overflow: 'auto', maxHeight: '40vh'}}>
    <Item.Group>
    
    <Item>
        <Item.Content>
          <Item.Header>Cantrips</Item.Header>
            <Item.Description>
                {character?.cantrips?.length === 0 || !character?.cantrips ? "None to show" : character?.cantrips?.join(', ')}
            </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content>
          <Item.Header>Spells</Item.Header>
            <Item.Description>
            {character?.spells?.length === 0 || !character?.spells ? "None to show" : character?.spells?.join(', ')}
            </Item.Description>
        </Item.Content>
      </Item>

      </Item.Group>
      </Segment>
    )
}

export default SpellsContainer
