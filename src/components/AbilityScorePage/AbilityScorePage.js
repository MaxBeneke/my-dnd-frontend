import React, { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import ScoreCounter from './ScoreCounter'
import { Button, Grid, Segment, Header, List, Modal } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addCharacter } from '../redux/userSlice'
import { updateCharacter } from '../redux/characterSlice'
import { autoComplete } from '../../images/classImages'
import { helpObject } from '../../images/classImages'

const AbilityScorePage = () => {
    const dispatch = useDispatch();
    const character = useSelector((storeState) => storeState.character)
    const history = useHistory();
    const [abilityScores, setAbilityScores] = useState([])
    const [bigCounter, setBigCounter] = useState(27)
    const [armorCheck, setArmorCheck] = useState(false)
    const [completeModal, setCompleteModal] = useState(false)
    const [openHelp, setOpenHelp] = useState(false)
    const [openLimit, setOpenLimit] = useState(false)
    const [limitMessage, setLimitMessage] = useState('')

    const query = gql`
    {
        abilityScores{
          full_name
            name
              desc
        }
      }
    `
    const abilityRef = {"STR": "strength", "DEX": "dexterity", "CON": "constitution", "INT": "intelligence", "WIS": "wisdom", "CHA": "charisma"}

    const addBigCounter = (num) => {
        setBigCounter(count => count + num)
    }
    const subtractBigCounter = (num) => {
        setBigCounter(count => count - num)
    }

    useEffect(() =>{
        if (!character.strength && !character.dexterity){
            dispatch(updateCharacter({strength: 8, dexterity: 8, constitution: 8, intelligence: 8, wisdom: 8, charisma: 8}))
        }
        request('https://www.dnd5eapi.co/graphql', query).then(scores => {setAbilityScores(scores.abilityScores)})
    },[character.dexterity, character.strength, dispatch, query])

    const handleAC = () => {
        // Make racial ability bonuses usable
        let result = {};

        for(let i = 0; i < character?.abilityBonuses.length; i++) {
            result[abilityRef[character.abilityBonuses[i].ability_score.name]] = character[abilityRef[character.abilityBonuses[i].ability_score.name]] + character.abilityBonuses[i].bonus
        }
        // Add racial abilities and use them for AC/HP
        let ac = result.dexterity ? (Math.floor((result.dexterity - 10) / 2)) + 10 : (Math.floor((character.dexterity - 10) / 2)) + 10
        let hp = result.constitution ? (Math.floor((result.constitution - 10) / 2)) + character.hit_die :(Math.floor((character.constitution - 10) / 2)) + character.hit_die
        setArmorCheck(true)
        dispatch(updateCharacter({...result, armorclass: ac, hp_max: hp, hp_current: hp}))
    }

    const handleSubmit = () => {
        if (bigCounter > 0 && !completeModal) {
            alert('You still have more points to assign!')
        } else if (!armorCheck && !completeModal) {
            alert('You have to add your race bonuses')
        } else {
            fetch(`https://app-my-dnd.herokuapp.com/characters`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(character)
            })
            .then(r => r.json())
            .then(newCharacter => {
                dispatch(addCharacter(newCharacter));
                history.push(`./character/${newCharacter.id}`)
            })
        }
    }

    const handleAutoComplete = () => {
        const updateObj = autoComplete[character?.character_class]
        dispatch(updateCharacter(updateObj))
        handleAC()
        setCompleteModal(true)
    }

    const handleLimit = (message) => {
        setLimitMessage(message)
        setOpenLimit(true)
    }

    const scoreMap = abilityScores.map(score => {
        return <Grid.Column>
                <ScoreCounter
                    handleLimit={handleLimit}
                    abbr={score.name}
                    fullName={score.full_name}
                    desc={score.desc}
                    bigCounter={bigCounter}
                    addBigCounter={addBigCounter}
                    subtractBigCounter={subtractBigCounter}        
                />
                </Grid.Column>
    })

    const bonusMap = character.abilityBonuses.map(score => {
        return (
            <List.Item>
                +{score.bonus} to {abilityRef[score.ability_score.name].charAt(0).toUpperCase() + abilityRef[score.ability_score.name].slice(1)}
            </List.Item>
        )
    })

    return (
        <Segment textAlign="center" basic>
            <Segment basic>
                <Header as='h1'>Points Left: {bigCounter}</Header>
                <Button color='red' style={{marginLeft: '5.5em'}} onClick={handleAutoComplete}>Auto-Complete</Button>
                <Button color='purple' floated='right' onClick={() => setOpenHelp(true)}>Help</Button>
            </Segment>
        <Grid columns={6}>
         {scoreMap}
        </Grid>
        <Button color='red' onClick={handleSubmit}>Create my Character!</Button>
        {bigCounter === 0 && <Button color='red' disabled={armorCheck} onClick={handleAC}>{armorCheck ? 'Bonuses Added' : 'Add my Bonuses'}</Button>}
        <Header as='h5'>{character.race} bonuses:</Header>
        <List>
            {bonusMap}
        </List>
        <Modal
            size='tiny'
            open={completeModal}
        >
            <Modal.Header>Auto-Complete</Modal.Header>
            <Modal.Content>
            <p>Ability Scores preset for {character.character_class}</p>
            <Button color='red' onClick={handleSubmit}>Create my Character!</Button>
            </Modal.Content>
        </Modal>
        <Modal
            size='small'
            open={openHelp}
            onClose={() => setOpenHelp(false)}
        >
            <Modal.Header>Ability Scores</Modal.Header>
            <Modal.Content>
            <p>{helpObject['AbilityScores']}</p>
            </Modal.Content>
        </Modal>
        <Modal
            name='Limit'
            size='tiny'
            open={openLimit}
            onClose={() => setOpenLimit(false)}
        >
            <Modal.Header>Ability Scores</Modal.Header>
            <Modal.Content>
            <p>{limitMessage}</p>
            </Modal.Content>
        </Modal>
        </Segment>
    )
}

export default AbilityScorePage
