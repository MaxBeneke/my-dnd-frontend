import React from 'react'
import { Segment } from 'semantic-ui-react'

const AbilityScoreCard = ({ ability, score }) => {
    const multiplier = (attr) => {
        return Math.floor((attr - 10) / 2)
    }

    return (
        <Segment compact>
            <h2>{ability}</h2>
            <h4>{score}</h4>
            <p>{multiplier(score) < 0 ? null : "+"}{multiplier(score)}</p>
        </Segment>
    )
}

export default AbilityScoreCard
