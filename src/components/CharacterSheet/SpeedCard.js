import React from 'react'
import { Item, Segment } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const SpeedCard = () => {
    const character = useSelector((storeState) => storeState.character)
    const multiplier = Math.floor((character.dexterity - 10) / 2)
   
    return (
        <Segment>
        <Item>
            <Item.Content verticalAlign='middle'>
            <h3>Speed: {character.speed}ft.</h3>
            <h4>Initiative: {multiplier < 0 ? null : "+"}{multiplier}</h4>
            </Item.Content>    
        </Item>

        </Segment>
    )
}

export default SpeedCard
