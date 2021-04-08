import React from 'react'
import { Item } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const CharacterCard = ({ level, character_class, race, subrace, name, id}) => {
    const history = useHistory();
    const toCharacterSheet = (id) => {
        history.push(`/character/${id}`)
    }

    return ( 
        <Item onClick={()=> {toCharacterSheet(id)}}>
         <Item.Image size='tiny' src='/images/wireframe/image.png' />
            <Item.Content>
            <Item.Header as='a'>{name}</Item.Header>
            <Item.Meta>{subrace && subrace} {race} {character_class}</Item.Meta>
            <Item.Extra>Level: {level}</Item.Extra>
            </Item.Content>    
        </Item>  
    )
}

export default CharacterCard
