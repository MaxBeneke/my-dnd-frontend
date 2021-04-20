import React from 'react'
import { useDispatch } from 'react-redux'
import { Accordion, Icon, List } from 'semantic-ui-react'
import { updateCharacter } from '../redux/characterSlice'

const BackgroundCard = ({ name, desc, skills, selectedBG, setSelectedBG}) => {
    const dispatch = useDispatch();
    const openStyle = {border: '2px solid green', borderRadius: '5px'}

    const handleClick = (name) => {
        const newIndex = selectedBG === name ? -1 : name
        setSelectedBG(newIndex)
        if (newIndex !== -1) {
            const updateObj = {background: newIndex, skills: skills}
            dispatch(updateCharacter(updateObj))
        }
    }

    const formattedSkills = skills.map(skill => {
        return <List.Item>{skill}</List.Item>
    })
    
    return (
        <div name={name} style={(selectedBG === name) ? openStyle : null}>
            <Accordion.Title
            active={selectedBG === name}
            name={name}
            onClick={() => handleClick(name)}
            >
                <Icon name='dropdown' />
                {name}
            </Accordion.Title>
            <Accordion.Content active={selectedBG === name}>
            <List>
                <List.Header as='h4'>Description: </List.Header>
                <List.Description>{desc}</List.Description>
                <List.Header as='h4'>Skills gained: </List.Header>
                    {formattedSkills}
            </List>     
            </Accordion.Content>
        </div>
    )
}

export default BackgroundCard
