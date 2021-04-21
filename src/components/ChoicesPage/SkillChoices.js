import React, { useState } from 'react'
import { Form, Header } from 'semantic-ui-react'
import { overrideCharacter } from '../redux/characterSlice'
import { useDispatch, useSelector } from 'react-redux'


const SkillChoices = ({ classInfo, handleIncomplete }) => {
    //set counter on higher level component to save it to redux??
    const character = useSelector((storeState) => storeState.character);
    const dispatch = useDispatch();
    const [counter, setCounter] = useState([]);
    const skillObj = classInfo?.class?.proficiency_choices?.find((chooseObj) => chooseObj.from[0].name.includes("Skill"));
    
    const handleClick = (e) => {
        const skillName = e.target.value.slice(7)
        const number = parseInt(e.target.name)
        if (counter.includes(number)) {
            let arr = counter.filter(num => num !== number)
            setCounter(arr)
            let reduxArr = character.skills.filter(skill => skill !== skillName)
            dispatch(overrideCharacter({...character, skills: reduxArr}))
        } else if (counter.length + 1 > parseInt(skillObj?.choose)) {
            handleIncomplete(`You may only choose ${skillObj?.choose}`)
        } else if (character.skills.includes(skillName)) {
            handleIncomplete('You already have this skill from your Race or Background')
        } else {
            setCounter([...counter, number])
            let reduxArr = [...character.skills, skillName]
            dispatch(overrideCharacter({...character, skills: reduxArr}))
        }
    }
    const skillChoices = skillObj?.from?.map((chooseObj, index) => {
        return <Form.Field 
                label={chooseObj?.name}
                value={chooseObj?.name} 
                control='input'
                type='checkbox'
                name={index}
                checked={counter.includes(index)}
                onChange={handleClick}
                />
    })
    
    return (
        <Form style={{marginLeft: '20em'}}>
            <Header as='h4'>Choose {skillObj?.choose} from: </Header>
            <Form.Group grouped>
                {skillChoices}
            </Form.Group>
        </Form>
    )
}

export default SkillChoices
