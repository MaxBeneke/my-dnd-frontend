import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'


const SkillChoices = ({ classInfo }) => {
    //set counter on higher level component to save it to redux??
    const [counter, setCounter] = useState([])
    const skillObj = classInfo?.class?.proficiency_choices?.find((chooseObj) => chooseObj.from[0].name.includes("Skill"))
    
    const handleClick = (e) => {
        const number = parseInt(e.target.name)
        if (counter.includes(number)) {
            let arr =  counter.filter(num => num !== number)
            setCounter(arr)
        } else if (counter.length + 1 > parseInt(skillObj?.choose)) {
            alert(`You may only choose ${skillObj?.choose}`)
        } else {
            setCounter([...counter, number])
        }
    }
    const skillChoices = skillObj?.from?.map((chooseObj, index) => {
        return <Form.Field 
                label={chooseObj?.name} 
                control='input'
                type='checkbox'
                name={index}
                checked={counter.includes(index)}
                onChange={handleClick}
                />
    })
    
    return (
        <Form>
            Choose {skillObj?.choose} from:
            <Form.Group grouped>
                {skillChoices}
            </Form.Group>
        </Form>
    )
}

export default SkillChoices
