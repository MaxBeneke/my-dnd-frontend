import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const CharacterSheet = () => {
   const params = useParams()
   const user = useSelector(storeState => storeState.user)
   const character = user.characters.find(character => parseInt(character.id) === parseInt(params.id))
    return (
        <div>
            {character?.name}
        </div>
    )
}

export default CharacterSheet
