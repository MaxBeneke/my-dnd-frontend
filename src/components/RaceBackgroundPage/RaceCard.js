import React, { useEffect, useState } from 'react'
import { Accordion, Icon, List, Popup } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'
import { request, gql } from 'graphql-request'

const RaceCard = ({ name, speed, languages, abilityBonuses, startingProficiencies, traitOptions, startingProficiencyOptions, traits, selectedRace, setSelectedRace}) => {
    const [traitDesc, setTraitDesc] = useState([])
    const storeProficiencies = startingProficiencies.map(prof => prof.name)
    const storeTraits = traits.map(trait => trait.name)
    const dispatch = useDispatch();
    const uploadLanguages = languages.map(langObj => langObj.name)
    const openStyle = {border: '2px solid green', borderRadius: '5px'}
    const query = gql`
    query getTraits($name: String) {
        traits(filter: {races: {name: $name}}){
          name
          desc
        }
      }
    `
    const enduranceDesc = "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 hit point instead."
    
    useEffect(() => {
        if (selectedRace !== -1) {
            request('https://www.dnd5eapi.co/graphql', query, {name: selectedRace}).then(data => setTraitDesc(data.traits))
        }
    }, [selectedRace, query])

    const handleClick = (name) => {
        const newIndex = selectedRace === name ? -1 : name
        setSelectedRace(newIndex)
        if (newIndex !== -1) {
            const updateObj = {race: newIndex, speed: speed, languages: uploadLanguages, proficiencies: storeProficiencies, traits: storeTraits, abilityBonuses: abilityBonuses}
            dispatch(updateCharacter(updateObj))
        }
    }

    const abilities = abilityBonuses.map(abilityObj => {
        return <List.Item>+{abilityObj.bonus} to {abilityObj.ability_score.name}</List.Item>
    })
    const formattedLangs = languages.map(language => {
        return <List.Item> {language.name} </List.Item>
    })
    const givenProficiencies = startingProficiencies.map(proficiency => {

        return <List.Item>{proficiency.name}</List.Item>
    })
    const givenTraits = traits.map(trait => {
        const desc = traitDesc?.find(traitObj => traitObj?.name === trait?.name)
        return (
    
        <List.Item key={trait?.name}>
            {trait.name && <Popup basic content={desc?.desc.length > 0 ? desc?.desc : enduranceDesc} trigger={<List.Icon name='question circle outline' />}/>}
            {trait.name}
        </List.Item>
        )
    })
    
    return (
            <div name={name} style={(selectedRace === name) ? openStyle : null}>
            <Accordion.Title
            active={selectedRace === name}
            name={name}
            onClick={() => handleClick(name)}>
                <Icon name='dropdown' />
                {name}
            </Accordion.Title>
            <Accordion.Content active={selectedRace === name}>
            <List>
                <List.Header as='h4'>Speed: {speed}</List.Header>
                <List.Header as='h4'>Ability Score Bonuses:</List.Header>
                    {abilities}
                <List.Header as='h4'>Languages: </List.Header>
                    {formattedLangs}
                <List.Header as='h4'>Proficiencies: </List.Header>
                    {givenProficiencies.length === 0 ? "None" : givenProficiencies}
                <List.Header as='h4'>Traits: </List.Header>
                    {givenTraits.length === 0 ? "None" : givenTraits}
            </List>     
            </Accordion.Content>
            
        </div>
    )
}

export default RaceCard
