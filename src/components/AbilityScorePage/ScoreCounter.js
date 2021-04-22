import React, { useState } from 'react'
import { Popup, Button, Segment, Icon, Header } from 'semantic-ui-react'
import { updateCharacter } from '../redux/characterSlice'
import { useDispatch, useSelector } from 'react-redux'

const ScoreCounter = ({ fullName, desc, bigCounter, addBigCounter, subtractBigCounter, handleLimit }) => {
    const dispatch = useDispatch();
    const character = useSelector((storeState) => storeState.character)
    const [counter, setCounter] = useState(8)

    const handleAdd = () => {
        if (counter + 1 === 16) {
            handleLimit('Maximum allowed for one Ability Score is 15')
        } else if (counter + 1 >= 14 && bigCounter - 2 >= 0) {
            setCounter((counter) => counter + 1)
            dispatch(updateCharacter({[fullName.toLowerCase()]: counter + 1}))
            subtractBigCounter(2)
        } else if (counter + 1 < 14 && bigCounter - 1 >= 0) {
            setCounter((counter) => counter + 1)
            subtractBigCounter(1)
            dispatch(updateCharacter({[fullName.toLowerCase()]: counter + 1}))
        } else {
            handleLimit("You don't have any points left!")
        }
    }

    const handleSubtract= () => {
        if (counter - 1 === 7) {
            handleLimit('Minimum allowed for one Ability Score is 8')
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
        <Segment basic>
            <Header as='h3'>
                <Popup basic trigger={
                    <Icon size='mini' corner name='question circle outline' />
                }>
                <Popup.Content>{desc}</Popup.Content>
                </Popup>
                <Header.Content>{fullName}</Header.Content>
            </Header>

        <div>
        <Button color='grey'  attached='left' onClick={handleSubtract}> <Icon name='minus'/> </Button>
        <Button color='black' attached='right' onClick={handleAdd}> <Icon name='plus'/> </Button>
        </div>
        
        <Segment textAlign='center' basic compact style={{fontSize: '3em'}}>{character[fullName.toLowerCase()]}</Segment>
        </Segment>
    )
}

export default ScoreCounter
