import React from 'react'
import CharacterContainer from './CharacterContainer'
import { Button, Grid, Icon } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { overrideCharacter } from '../redux/characterSlice'
import { logoutUser } from '../redux/userSlice'
import { useHistory } from 'react-router-dom'

const UserPage = () => {
    const user = useSelector((storeState) => storeState.user)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNewCharacter = () => {
        dispatch(overrideCharacter({}))
        history.push('/classes')
    }

    const logout = () => {
        localStorage.removeItem("token")
        dispatch(logoutUser())
        history.push('/login')
    }
    
    return (
        <Grid columns={2} centered padded>
            <Grid.Column>
            {user.characters.length === 0 && <h1>You haven't created any characters yet.</h1>}
                <CharacterContainer />
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Button
                    animated='fade' 
                    size='massive' 
                    floated="right" 
                    onClick={handleNewCharacter}
                    style={{width: '10em', height: '10em', display: 'flex', justifyContent: 'center'}}
                >
                <Button.Content visible>Create a New Character</Button.Content>
                <Button.Content hidden>
                    <Icon name='plus' />
                </Button.Content>
                </Button>
                <Button onClick={logout}>Logout</Button>
            </Grid.Column>
        </Grid>
    )
}

export default UserPage
