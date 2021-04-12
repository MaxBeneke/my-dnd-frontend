import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'

const EquipmentChoices = ( { classInfo }) => {
    // const [counter, setCounter] = useState([])

    // const handleClick = (e) => {
    //     const number = parseInt(e.target.name)
    //     if (counter.includes(number)) {
    //         let arr =  counter.filter(num => num !== number)
    //         setCounter(arr)
    //     } else if (counter.length + 1 > parseInt(skillObj?.choose)) {
    //         alert(`You may only choose ${chooseObj?.choose}`)
    //     } else {
    //         setCounter([...counter, number])
    //     }
    // }
    console.log(classInfo?.class?.starting_equipment_options)
    const equipmentChoices = classInfo?.class?.starting_equipment_options?.map(chooseObj => {
        return ( 
            <Dropdown 
                placeholder='Choose 1'
                fluid
                selection
                options={chooseObj.from.map(equipOption => (
                    
                    {
                    key: `${equipOption?.equipment?.name}`,
                    text: `${equipOption?.equipment?.name}`,
                    value: `${equipOption?.equipment?.name}`
                }
                ))}
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
