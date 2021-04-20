import React, { useState } from 'react'
import { Popup, Form, Header } from 'semantic-ui-react'
import { overrideCharacter } from '../redux/characterSlice'
import { useSelector, useDispatch } from 'react-redux'

const SpellChoices = ( spellInfo ) => {
    const character = useSelector((storeState) => storeState.character)
    const dispatch = useDispatch();
    const [counter, setCounter] = useState([])
    const chooseFrom = spellInfo?.slotInfo?.level?.spellcasting?.spells_known || spellInfo?.slotInfo?.level?.spellcasting?.spell_slots_level_1
    
    const handleClick = (e) => {
        const number = parseInt(e.target.name)
        const spellName = e.target.value
        if (counter.includes(number)) {
            let arr =  counter.filter(num => num !== number)
            setCounter(arr)
            let reduxArr = character?.spells?.filter(spell => spell !== spellName)
            dispatch(overrideCharacter({...character, spells: reduxArr}))
        } else if (counter.length + 1 > chooseFrom) {
            alert(`You may only choose ${chooseFrom}`)
        } else {
            setCounter([...counter, number])
            if (character.spells) {
                let reduxArr = [...character.spells, spellName]
                dispatch(overrideCharacter({...character, spells: reduxArr}))
            } else {
            dispatch(overrideCharacter({...character, spells: [spellName]}))
            }
        }
    }
    
    const spellChoices = spellInfo?.spellInfo?.spells?.map((spellObj, index) => {
       return <Popup
                trigger={
                    <Form.Field 
                    value={spellObj.name}
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
    
    
    
    if (!spellInfo?.slotInfo?.level?.spellcasting?.spells_known && !spellInfo?.slotInfo?.level?.spellcasting?.spell_slots_level_1) {
        return <Header textAlign='center' as='h3'>None to choose from</Header>
    } else 
    return (
        <Form style={{marginLeft: '20em'}}>
        <Header as='h4'>Choose {chooseFrom} from: </Header>
        <Form.Group grouped>
            {spellChoices}
        </Form.Group>
    </Form>
    )
}

export default SpellChoices
