import React from 'react'
import { Segment, Item } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const FeatureContainer = () => {
    const character = useSelector((storeState) => storeState.character)

    return (
    <Segment style={{overflow: 'auto', maxHeight: '40vh'}}>
    <Item.Group>
    
    <Item>
        <Item.Content>
          <Item.Header>Features</Item.Header>
            <Item.Description>
                {character?.features?.join(', ')}
            </Item.Description>
        </Item.Content>
      </Item>

      </Item.Group>
      </Segment>
    )
}

export default FeatureContainer
