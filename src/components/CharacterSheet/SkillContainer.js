import React from 'react'
import { Form } from 'semantic-ui-react'
import { overrideCharacter } from '../redux/characterSlice'
import { useDispatch, useSelector } from 'react-redux'

const SkillContainer = () => {
    const dispatch = useDispatch();
    const character = useSelector((storeState) => storeState.character)

    const skillData = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]
    const savingThrowData = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]

    const handleClick = (e) => {
        const skill = e.target.name
        if (character?.skills?.includes(skill)) {
            let updateArr = character.skills.filter(element => element !== skill)
            console.log(updateArr)
            dispatch(overrideCharacter({...character, skills: updateArr}))
        } else {
            let updateArr = [...character.skills, skill]
            dispatch(overrideCharacter({...character, skills: updateArr}))
        }
    }
    
    const savingThrowDisplay = savingThrowData.map((skill) => {
        return <Form.Field
                key={skill} 
                label={skill} 
                control='input'
                type='checkbox'
                name={skill}
                checked={character.skills?.includes(skill.charAt(0).toUpperCase() + skill.slice(1))}
                onChange={handleClick}
                />
    })

    const skillDisplay = skillData.map((skill) => {
        return <Form.Field 
                key={skill}
                label={skill} 
                control='input'
                type='checkbox'
                name={skill}
                checked={character.skills?.includes(skill)}
                onChange={handleClick}
                />
    })

    return (
        <Form>
            <Form.Group grouped>
                {savingThrowDisplay}
                {skillDisplay}
            </Form.Group>
        </Form>
    )
}

export default SkillContainer
