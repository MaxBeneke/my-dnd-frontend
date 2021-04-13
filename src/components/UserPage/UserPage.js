import React from 'react'
import CharacterContainer from './CharacterContainer'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { overrideCharacter } from '../redux/characterSlice'
import { useHistory } from 'react-router-dom'

const UserPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNewCharacter = () => {
        dispatch(overrideCharacter({}))
        history.push('/classes')
    }
    
    return (
        <div>
            <CharacterContainer />
            <Button floated="right" onClick={handleNewCharacter}>Create a New Character</Button>
        </div>
    )
}

export default UserPage
