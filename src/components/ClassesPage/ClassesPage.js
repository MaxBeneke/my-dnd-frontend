import React from 'react'
import { Card, Input, Header, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { classImages } from '../../images/classImages'
import { updateCharacter } from '../redux/characterSlice'
import { useSelector, useDispatch } from 'react-redux'
import ClassCard from './ClassCard'


const ClassesPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((storeState) => storeState.user)
    const character = useSelector((storeState) => storeState.character)

    const handleUpdateClass = (name, die) => {
        const updateObj = {character_class: name, user_id: user.id, level: 1, hit_die: die}
        dispatch(updateCharacter(updateObj))
        history.push('/race-background')
    }

    const handleChange = (e) => {
        let newObj = {name: e.target.value};
        dispatch(updateCharacter(newObj))
    }
    
    const allClasses = classImages.map(character_class => {
        return (
            <ClassCard 
                name={character_class.name} 
                hit_die={character_class.hit_die}
                handleUpdateClass={handleUpdateClass}
            />
        )
    })

    return (
        <>
            <Segment basic textAlign="center">
            <Header as='h3' style={{marginTop: '.5em', textAlign: 'center'}}>Choose your Class</Header>
            <Input onChange={handleChange} value={character.name} placeholder="Name your character" autoFocus/>
            </Segment>
            <Card.Group itemsPerRow={4} style={{maxHeight: '90vh', marginBottom: '10em', marginLeft: '9em'}}>
                {allClasses}
            </Card.Group>
        </>
    )
}

export default ClassesPage
