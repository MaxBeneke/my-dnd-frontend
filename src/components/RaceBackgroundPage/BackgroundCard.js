import React from 'react'
import { useDispatch } from 'react-redux'
import { Accordion, Icon } from 'semantic-ui-react'
import { updateCharacter } from '../redux/characterSlice'

const BackgroundCard = ({ name, desc, skills, selectedBG, setSelectedBG}) => {
    const dispatch = useDispatch();

    const handleClick = (name) => {
        const newIndex = selectedBG === name ? -1 : name
        setSelectedBG(newIndex)
        if (newIndex !== -1) {
            const updateObj = {background: newIndex}
            dispatch(updateCharacter(updateObj))
        }
    }

    const formattedSkills = skills.map(skill => {
        return <li>{skill}</li>
    })
    
    return (
        <div name={name}>
            <Accordion.Title
            active={selectedBG === name}
            name={name}
            onClick={() => handleClick(name)}>
                <Icon name='dropdown' />
                {name}
            </Accordion.Title>
            <Accordion.Content active={selectedBG === name}>
            <ul>
                <li>Description: {desc}</li>
                <li>Skills gained: 
                    <ul>{formattedSkills}</ul>
                </li>
            </ul>     
            </Accordion.Content>
            
        </div>
    )
}

export default BackgroundCard
