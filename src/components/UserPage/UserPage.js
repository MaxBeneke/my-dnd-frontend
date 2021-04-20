import React from 'react'
import CharacterContainer from './CharacterContainer'
import { Button, Grid, Icon, Segment, Header } from 'semantic-ui-react'
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
        <>
        <Header as='h1' 
        textAlign='center' 
        style={{fontFamily: 'Aclonica', marginTop: '.5em'}}
        >
            {user.name}'s Characters</Header>
        <Grid columns={2} centered padded>
            <Grid.Column>
            {user.characters.length === 0 && <h1>You haven't created any characters yet.</h1>}
                <CharacterContainer />
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Segment basic textAlign='center' >
                <Button
                    animated='fade'
                    color='red' 
                    size='massive'  
                    onClick={handleNewCharacter}
                    style={{width: '10em', height: '4em', marginTop: '10em'}}
                >
                <Button.Content visible>Create a New Character</Button.Content>
                <Button.Content hidden>
                    <Icon name='plus' />
                </Button.Content>
                </Button>
                </Segment>
                <Button color='black' onClick={logout} style={{marginTop: '10em'}}>Logout</Button>
            </Grid.Column>
        </Grid>
        </>
    )
}

export default UserPage
