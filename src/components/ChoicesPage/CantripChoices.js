import React, { useState } from 'react'
import { Popup, Form, Header } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { overrideCharacter } from '../redux/characterSlice'

const CantripChoices = ({ cantripInfo, slotInfo, handleIncomplete }) => {
    const dispatch = useDispatch();
    const character = useSelector((storeState) => storeState.character)
    const [counter, setCounter] = useState([])
    const chooseFrom = slotInfo?.level?.spellcasting?.spells_known || slotInfo?.level?.spellcasting?.spell_slots_level_1
    
    const handleClick = (e) => {
        const number = parseInt(e.target.name)
        const cantripName = e.target.value
        if (counter.includes(number)) {
            let arr =  counter.filter(num => num !== number)
            setCounter(arr)
            let reduxArr = character?.cantrips?.filter(cantrip => cantrip !== cantripName)
            dispatch(overrideCharacter({...character, cantrips: reduxArr}))
        } else if (counter.length + 1 > chooseFrom) {
            handleIncomplete(`You may only choose ${chooseFrom}`)
        } else {
            setCounter([...counter, number])
            if (character.cantrips) {
                let reduxArr = [...character.cantrips, cantripName]
                dispatch(overrideCharacter({...character, cantrips: reduxArr}))
            } else {
            dispatch(overrideCharacter({...character, cantrips: [cantripName]}))
            }
        }
    }
    
    const cantripChoices = cantripInfo?.spells?.map((cantripObj, index) => {
       return <Popup
                trigger={
                    <Form.Field 
                    value={cantripObj.name}
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
        return <Header textAlign='center' as='h3'>None to choose from</Header>
    } else 
    return (
        <Form style={{marginLeft: '20em'}}>
        <Header as='h4'>Choose {chooseFrom} from: </Header>
        <Form.Group grouped>
            {cantripChoices}
        </Form.Group>
    </Form>
    )
   
}

export default CantripChoices
