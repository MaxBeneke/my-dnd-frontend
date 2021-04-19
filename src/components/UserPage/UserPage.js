import React from 'react'
import CharacterContainer from './CharacterContainer'
import { Button, Grid, Icon } from 'semantic-ui-react'
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
        <Grid columns={2} centered>
            <Grid.Column>
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
            </Grid.Column>
        </Grid>
    )
}

export default UserPage
