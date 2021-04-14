import React, { useState } from 'react'
import { Form, Dropdown } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { overrideCharacter, updateCharacter } from '../redux/characterSlice'

const EquipmentChoices = ( { classInfo }) => {
    const character = useSelector((storeState) => storeState.character)
    const dispatch = useDispatch();
    const [loggedClick, setLoggedClick] = useState(-1)
    const [counter, setCounter] = useState(0)

    const equipRepository = {
        1: "Dagger",
        2: "40 Gold",
        3: "Shortsword",
        4: "50ft Rope",
        5: "Crossbow"
    }

    const handleChange = (e) => {
        console.log(e.target)
        const equipItem = e.target.innerText
        if (character.equipment && !character?.equipment?.includes(equipItem)) {
            let reduxArr = [...character.equipment, equipItem]
            let newReduxArr = reduxArr.filter(equip => equip !== loggedClick)
            dispatch(overrideCharacter({...character, equipment: newReduxArr}))
        } else if (!character.equipment) {
            let reduxArr = [equipItem]
            dispatch(overrideCharacter({...character, equipment: reduxArr}))
        }
    }

    const logClick = (e) => {
        const prevEquip = e.target.innerText
        if (character?.equipment?.includes(prevEquip)) {
            console.log(prevEquip)
            setLoggedClick(prevEquip)
        }
    }
    const equipmentChoices = classInfo?.class?.starting_equipment_options?.map((chooseObj, index) => {
        return ( 
            <Dropdown 
                id={index}
                placeholder='Choose 1'
                fluid
                selection
                onClick={logClick}
                onChange={handleChange}
                options={chooseObj.from.map(equipOption => {
                    // if (equipOption?.equipment?.name === undefined) {
                    //     setCounter(count => count + 1)
                    // }
                    return {
                    key: `${equipOption?.equipment?.name ? equipOption?.equipment?.name : equipRepository[counter]}`,
                    text: `${equipOption?.equipment?.name ? equipOption?.equipment?.name : equipRepository[counter]}`,
                    value: `${equipOption?.equipment?.name ? equipOption?.equipment?.name : equipRepository[counter]}`
                    }
                })}
            />
        )    
    })

    return (
         <Form>
            <Form.Group grouped>
                {equipmentChoices}
            </Form.Group>
        </Form>
    )
}

export default EquipmentChoices
