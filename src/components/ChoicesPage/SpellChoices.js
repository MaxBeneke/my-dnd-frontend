import React, { useState } from 'react'
import { Popup, Form } from 'semantic-ui-react'

const SpellChoices = ( spellInfo ) => {
    const [counter, setCounter] = useState([])
    const chooseFrom = spellInfo?.slotInfo?.level?.spellcasting?.spells_known || spellInfo?.slotInfo?.level?.spellcasting?.spell_slots_level_1
    
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
    
    const spellChoices = spellInfo?.spellInfo?.spells?.map((spellObj, index) => {
       return <Popup
                trigger={
                    <Form.Field 
                    label={spellObj.name} 
                    control='input'
                    type='checkbox'
                    name={index}
                    checked={counter.includes(index)}
                    onChange={handleClick}
                    />
                }
                >
                <Popup.Header>{spellObj.name}</Popup.Header>
                <Popup.Content>{spellObj.desc[0]}</Popup.Content>    
            </Popup>
    })
    console.log(chooseFrom)
    
    
    
    if (!spellInfo?.slotInfo?.level?.spellcasting?.spells_known && !spellInfo?.slotInfo?.level?.spellcasting?.spell_slots_level_1) {
        return null
    } else 
    return (
        <Form>
        Choose {chooseFrom} from:
        <Form.Group grouped>
            {spellChoices}
        </Form.Group>
    </Form>
    )
}

export default SpellChoices
