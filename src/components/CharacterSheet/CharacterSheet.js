import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../redux/userSlice'
import { useHistory } from 'react-router-dom'
import { overrideCharacter } from '../redux/characterSlice'
import { Grid, Button, Segment } from 'semantic-ui-react'
import CharacterInfoCard from './CharacterInfoCard'
import HPContainer from './HPContainer'
import AbilityScoreContainer from './AbilityScoreContainer'
import SkillContainer from './SkillContainer'
import PersonalityContainer from './PersonalityContainer'
import ListContainer from './ListContainer'

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
        fetch(`http://localhost:3000/character/${character.id}`, {
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
        <Segment padded='very' basic>
        <Grid>
            <Grid.Row height={4}>
                <Grid.Column width={5}>
                    <CharacterInfoCard
                        name={character?.name}
                        level={character?.level}
                        race={character?.race}
                        background={character?.background}
                        character_class={character?.character_class}
                        character={character}
                    />
                </Grid.Column>
                <Grid.Column width={5}>
                    <HPContainer />   
                </Grid.Column>
                <Grid.Column width={6}>
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
            <Grid.Column width={2}>
                <Grid.Row height={12}>
                    <AbilityScoreContainer
                        strength={character?.strength}
                        dexterity={character?.dexterity}
                        constitution={character?.constitution}
                        intelligence={character?.intelligence}
                        wisdom={character?.wisdom}
                        charisma={character?.charisma}
                        character={character}
                    />
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={3}>
                <Grid.Row height={12}>
                    <SkillContainer 
                    skills={character?.skills}
                    character={character}
                    />
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={5}>
                <Grid.Row height={6}>
                    <ListContainer
                        key='features'
                        listVar='features'
                    />
                </Grid.Row>
                <Grid.Row height={6}>
                    <ListContainer
                        key='traits'
                        listVar='traits'
                    />
                    <ListContainer
                        key='languages'
                        listVar='languages'
                    />
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={6}>
                <Grid.Row height={6}>
                    <ListContainer
                        key='equipment'
                        listVar='equipment'
                    />
                </Grid.Row>
                <Grid.Row height={6}>
                    <ListContainer
                        key='cantrips'
                        listVar='cantrips'
                    />
                    <ListContainer
                        key='spells'
                        listVar='spells'
                    />
                </Grid.Row>
            </Grid.Column>
            

        </Grid>
        <Button.Group>
        <Button onClick={handleSaveChange}> Save Changes </Button>
        <Button.Or/>
        <Button positive onClick={() => {history.push(`/user/${user.id}`)}}> Revert Changes </Button>
        </Button.Group>
        </Segment>
    )
}

export default CharacterSheet
