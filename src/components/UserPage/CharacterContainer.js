import React from 'react'
import CharacterCard from './CharacterCard'
import { useSelector } from 'react-redux'
import { Item, Segment } from 'semantic-ui-react'

const CharacterContainer = () => {
    const user = useSelector((storeState) => storeState.user)
    const allCharacters = user?.characters?.map(character => {
      return (  <CharacterCard key={character.name} 
        level={character.level}
        character_class={character.character_class}
        race={character.race} 
        name={character.name}
        subrace={character.subrace}
        id={character.id}
        />
      )
    })
    return (
      <Segment basic style={{overflow: 'auto', maxHeight: '90vh'}}>
        <Item.Group>
            {allCharacters}
        </Item.Group>
      </Segment>
    )
}

export default CharacterContainer
