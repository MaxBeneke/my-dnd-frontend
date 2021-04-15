import React from 'react'
import { Item } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const SpeedCard = () => {
    const character = useSelector((storeState) => storeState.character)
    const multiplier = Math.floor((character.dexterity - 10) / 2)
   
    return (
        <Item>
            <Item.Content verticalAlign='middle'>
            <h2>Speed: {character.speed}ft.</h2>
            <h4>Initiative: {multiplier < 0 ? null : "+"}{multiplier}</h4>
            </Item.Content>    
        </Item>
    )
}

export default SpeedCard
