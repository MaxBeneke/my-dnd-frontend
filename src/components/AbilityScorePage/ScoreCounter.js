import React, { useState } from 'react'
import { Popup, Button, Segment } from 'semantic-ui-react'
import { updateCharacter } from '../redux/characterSlice'
import { useDispatch, useSelector } from 'react-redux'

const ScoreCounter = ({ abbr, fullName, desc, bigCounter, addBigCounter, subtractBigCounter }) => {
    const dispatch = useDispatch();
    const character = useSelector((storeState) => storeState.character)
    const [counter, setCounter] = useState(8)

    const handleAdd = () => {
        if (counter + 1 === 16) {
            alert('Maximum allowed for one Ability Score is 15')
        } else if (counter + 1 >= 14 && bigCounter - 2 >= 0) {
            setCounter((counter) => counter + 1)
            dispatch(updateCharacter({[fullName.toLowerCase()]: counter + 1}))
            subtractBigCounter(2)
        } else if (counter + 1 < 14 && bigCounter - 1 >= 0) {
            setCounter((counter) => counter + 1)
            subtractBigCounter(1)
            dispatch(updateCharacter({[fullName.toLowerCase()]: counter + 1}))
        } else {
            alert("You don't have any points left!")
        }
    }

    const handleSubtract= () => {
        if (counter - 1 === 7) {
            alert('Minimum allowed for one Ability Score is 8')
        } else if (counter - 1 >= 13) {
            setCounter((counter) => counter - 1)
            dispatch(updateCharacter({[fullName.toLowerCase()]: counter - 1}))
            addBigCounter(2)
        } else if (counter - 1 < 13) {
            setCounter((counter) => counter - 1)
            dispatch(updateCharacter({[fullName.toLowerCase()]: counter - 1}))
            addBigCounter(1)
        }
    }
    return (
        <>
        <h3>{character[fullName.toLowerCase()]}</h3>
        <Button.Group>
        <Button onClick={handleSubtract}> - </Button>
        <Popup trigger={
        <Button.Or text={abbr}/>
        }>
        <Popup.Content>{desc.join(' ')}</Popup.Content>   
        </Popup>
       
        <Button positive onClick={handleAdd}> + </Button>
        </Button.Group>
        <Segment tiny >{counter}</Segment>
        </>
    )
}

export default ScoreCounter
