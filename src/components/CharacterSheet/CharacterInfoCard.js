import React from 'react'
import { Item } from 'semantic-ui-react'

const CharacterInfoCard = ({ name, level, background, character_class, race }) => {
    return (
        <Item>
           <Item.Content verticalAlign='middle'>
           <strong>{name}</strong>
                <ul>
                    <li>Level: {level}</li>    
                    <li>{race} {character_class}</li>
                    <li>Background: {background}</li>
                </ul>
            </Item.Content> 
        </Item>
    )
}

export default CharacterInfoCard
