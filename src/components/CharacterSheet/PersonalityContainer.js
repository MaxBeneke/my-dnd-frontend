import React from 'react'
import { Item, Segment } from 'semantic-ui-react'
import PersonalityEdit from './PersonalityEdit'

const PersonalityContainer = () => {
    
    return (
    
    <Segment>
    <Item.Group>
    
    <PersonalityEdit name="Personality"/>
    <PersonalityEdit name="Ideals"/>
    <PersonalityEdit name="Flaws"/>
    <PersonalityEdit name="Bonds"/>
    
    </Item.Group>
    </Segment>
    )
}

export default PersonalityContainer
