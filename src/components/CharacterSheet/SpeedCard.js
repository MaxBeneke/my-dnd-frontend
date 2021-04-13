import React from 'react'
import { Item } from 'semantic-ui-react'

const SpeedCard = ({ speed, dexterity }) => {
    const multiplier = Math.floor((dexterity - 10) / 2)
    return (
        <Item>
            <Item.Content verticalAlign='middle'>
            <h2>Speed: {speed}ft.</h2>
            <h4>Initiative: {multiplier < 0 ? null : "+"}{multiplier}</h4>
            </Item.Content>    
        </Item>
    )
}

export default SpeedCard
