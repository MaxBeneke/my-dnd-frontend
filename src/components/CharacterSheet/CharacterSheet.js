import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../redux/userSlice'
import { useHistory } from 'react-router-dom'
import { overrideCharacter } from '../redux/characterSlice'
import { Grid, Button, Segment } from 'semantic-ui-react'
import CharacterInfoCard from './CharacterInfoCard'
import DiceContainer from './DiceContainer'
import AbilityScoreContainer from './AbilityScoreContainer'
import SkillContainer from './SkillContainer'
import PersonalityContainer from './PersonalityContainer'
import ListContainer from './ListContainer'
import ACSpeedContainer from './ACSpeedContainer'

const CharacterSheet = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams()
    const user = useSelector(storeState => storeState.user)
    const character = user.characters.find(character => parseInt(character.id) === parseInt(params.id))
    const characterStore = useSelector((storeState) => storeState.character)
    
    useEffect(() => {
        dispatch(overrideCharacter(character))
    }, [])

    const handleSaveChange = () => {
        fetch(`https://app-my-dnd.herokuapp.com/character/${character.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(characterStore)
        })
        .then(r => r.json())
        .then(userObj => {
            dispatch(updateUser(userObj))
            history.push(`/user/${userObj.id}`)
        })
    }

    return (
        <Segment padded basic>
        <Grid>
            <Grid.Row height={3}>
                <Grid.Column width={4}>
                    <CharacterInfoCard
                        name={character?.name}
                        level={character?.level}
                        race={character?.race}
                        background={character?.background}
                        character_class={character?.character_class}
                        character={character}
                        alignment={character.alignment}
                    />
                </Grid.Column>
                <Grid.Column width={12}>
                <AbilityScoreContainer
                    strength={character?.strength}
                    dexterity={character?.dexterity}
                    constitution={character?.constitution}
                    intelligence={character?.intelligence}
                    wisdom={character?.wisdom}
                    charisma={character?.charisma}
                    character={character}
                />
                </Grid.Column>
               
              
            </Grid.Row>
            <Grid.Row height={6}>
            <Grid.Column width={2} style={{overflow: 'auto', maxHeight: '47vh'}}>
                <SkillContainer 
                skills={character?.skills}
                character={character}
                />
            </Grid.Column>
            <Grid.Column width={4} style={{overflow: 'auto', maxHeight: '47vh'}}>
                <ListContainer
                    key='equipment'
                    listVar='equipment'
                    />
                <ListContainer
                    key='features'
                    listVar='features'
                    />
                <ListContainer
                    key='traits'
                    listVar='traits'
                    />
                <ListContainer
                    key='languages'
                    listVar='languages'
                    />
            </Grid.Column>
            <Grid.Column width={4} style={{overflow: 'auto', maxHeight: '47vh'}}>
                <ACSpeedContainer />
                <ListContainer
                    key='cantrips'
                    listVar='cantrips'
                    />
                <ListContainer
                    key='spells'
                    listVar='spells'
                    />
            </Grid.Column>
            <Grid.Column width={6} style={{overflow: 'auto', maxHeight: '47vh'}}>
                <DiceContainer />   
                <PersonalityContainer 
                    alignment={character?.alignment}
                    personality={character?.personality}
                    ideals={character?.ideals}
                    bonds={character?.bonds}
                    flaws={character?.flaws}
                    character={character}
                    />

            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Segment basic textAlign='center'>
            <Button.Group>
            <Button color='red' onClick={() => {history.push(`/user/${user.id}`)}}> Revert Changes </Button>
            <Button.Or/>
            <Button color='blue' onClick={handleSaveChange}> Save Changes </Button>
            </Button.Group>
        </Segment>
        </Segment>
    )
}

export default CharacterSheet
