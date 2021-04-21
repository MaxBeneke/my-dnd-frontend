import React from 'react'
import { Segment } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
const HitDiceCard = () => {
    const character = useSelector((storeState) => storeState.character)
    return (
        <Segment textAlign='center' padded='very' style={{height: '7.4em'}}>
            <h4>Hit Die: {character.level}d{character.hit_die}</h4>
        </Segment>
    )
}

export default HitDiceCard
