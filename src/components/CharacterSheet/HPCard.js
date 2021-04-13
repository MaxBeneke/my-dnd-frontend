import React from 'react'
import { Segment } from 'semantic-ui-react'
const HPCard = ({ hp_max, hp_current, armorclass}) => {

    return (
        <Segment>
        <h2>AC: {armorclass}</h2>
        <h4>HP: {hp_current}/<strong>{hp_max}</strong></h4>  
        </Segment>
    )
}

export default HPCard
