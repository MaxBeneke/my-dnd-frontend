import React from 'react'
import CharacterCard from './CharacterCard'
import { useSelector } from 'react-redux'
import { Item } from 'semantic-ui-react'

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
        <Item.Group>
            {allCharacters}
        </Item.Group>
    )
}

export default CharacterContainer
