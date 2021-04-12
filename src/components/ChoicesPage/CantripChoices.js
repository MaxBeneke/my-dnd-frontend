import React, { useState } from 'react'
import { Popup, Form } from 'semantic-ui-react'

const CantripChoices = ({ cantripInfo, slotInfo }) => {
    console.log(cantripInfo, slotInfo)
    const [counter, setCounter] = useState([])
    const chooseFrom = slotInfo?.level?.spellcasting?.spells_known || slotInfo?.level?.spellcasting?.spell_slots_level_1
    
    const handleClick = (e) => {
        const number = parseInt(e.target.name)
        if (counter.includes(number)) {
            let arr =  counter.filter(num => num !== number)
            setCounter(arr)
        } else if (counter.length + 1 > chooseFrom) {
            alert(`You may only choose ${chooseFrom}`)
        } else {
            setCounter([...counter, number])
        }
    }
    
    const cantripChoices = cantripInfo?.spells?.map((cantripObj, index) => {
       return <Popup
                trigger={
                    <Form.Field 
                    label={cantripObj.name} 
                    control='input'
                    type='checkbox'
                    name={index}
                    checked={counter.includes(index)}
                    onChange={handleClick}
                    />
                }
                >
                <Popup.Header>{cantripObj.name}</Popup.Header>
                <Popup.Content>{cantripObj.desc[0]}</Popup.Content>    
            </Popup>
    })
    
    if (!slotInfo?.level?.spellcasting?.spells_known && !slotInfo?.level?.spellcasting?.spell_slots_level_1) {
        return null
    } else 
    return (
        <Form>
        Choose {chooseFrom} from:
        <Form.Group grouped>
            {cantripChoices}
        </Form.Group>
    </Form>
    )
   
}

export default CantripChoices
