import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'

const RaceCard = ({ name, speed, languages, abilityBonuses, startingProficiencies, traitOptions, startingProficiencyOptions, traits, selectedRace, setSelectedRace}) => {
    // console.log(traits)
    const storeProficiencies = startingProficiencies.map(prof => prof.name)
    const storeTraits = traits.map(trait => trait.name)
    const dispatch = useDispatch();
    const uploadLanguages = languages.map(langObj => langObj.name)

    const handleClick = (name) => {
        const newIndex = selectedRace === name ? -1 : name
        setSelectedRace(newIndex)
        if (newIndex !== -1) {
            const updateObj = {race: newIndex, speed: speed, languages: uploadLanguages, proficiencies: storeProficiencies, traits: storeTraits, abilityBonuses: abilityBonuses}
            dispatch(updateCharacter(updateObj))
        }
    }

    const abilities = abilityBonuses.map(abilityObj => {
        return <li>+{abilityObj.bonus} to {abilityObj.ability_score.name}</li>
    })
    const formattedLangs = languages.map(language => {
        return <li> {language.name} </li>
    })
    const givenProficiencies = startingProficiencies.map(proficiency => {
        return <li>{proficiency.name}</li>
    })
    const givenTraits = traits.map(trait => {
        return <li>{trait.name}</li>
    })
    
    return (
        <div name={name}>
            <Accordion.Title
            active={selectedRace === name}
            name={name}
            onClick={() => handleClick(name)}>
                <Icon name='dropdown' />
                {name}
            </Accordion.Title>
            <Accordion.Content active={selectedRace === name}>
            <ul>
                <li>Speed: {speed}</li>
                <li>Ability Score Bonuses: 
                    <ul>{abilities}</ul>
                </li>
                <li>Languages: 
                    <ul>{formattedLangs}</ul>
                </li>
                <li>Proficiencies:
                    <ul>{givenProficiencies.length === 0 ? "None" : givenProficiencies}</ul>
                </li>
                <li>Traits:
                    <ul>{givenTraits.length === 0 ? "None" : givenTraits}</ul>
                </li>
            </ul>     
            </Accordion.Content>
            
        </div>
    )
}

export default RaceCard
