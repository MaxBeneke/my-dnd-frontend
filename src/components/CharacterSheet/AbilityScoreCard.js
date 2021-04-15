import React, { useState } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'

const AbilityScoreCard = ({ ability }) => {
    const character = useSelector((storeState) => storeState.character)
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)

    const multiplier = (attr) => {
        return Math.floor((attr - 10) / 2)
    }

    const handleAdd = () => {
        let result = character[ability] + 1
        dispatch(updateCharacter({[ability]: result}))
    }

    const handleSubtract = () => {
        let result = character[ability] - 1
        dispatch(updateCharacter({[ability]: result}))
    }

    return (
        <Segment onDoubleClick={() => setIsEdit(true)} compact>
            <h2>{ability.charAt(0).toUpperCase() + ability.slice(1)}</h2>
            { isEdit && <Button size='tiny' compact basic color='blue' onClick={()=> setIsEdit(false)}>Save</Button>}
            <h3>{character[ability]}</h3>
            { isEdit && (
                <div>
                <Button compact attached='left' icon='minus' onClick={handleSubtract} />
                <Button compact attached='right' icon='plus' onClick={handleAdd} />
                </div>
            )}
            <p>{multiplier(character[ability]) < 0 ? null : "+"}{multiplier(character[ability])}</p>
        </Segment>
    )
}

export default AbilityScoreCard
