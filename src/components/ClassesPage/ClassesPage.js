import React, { useState } from 'react'
import { Card, Input, Header, Segment, Modal } from 'semantic-ui-react'
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
    const [open, setOpen] = useState(false)

    const handleUpdateClass = (name, die) => {
        if (!character.name) {
            setOpen(true)
        } else {
            const updateObj = {character_class: name, user_id: user.id, level: 1, hit_die: die}
            dispatch(updateCharacter(updateObj))
            history.push('/race-background')
        }
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
            <Header as='h1' style={{marginTop: '.5em', textAlign: 'center', fontFamily: 'Aclonica'}}>Choose your Class</Header>
            <Input onChange={handleChange} value={character.name} placeholder="Name your character" autoFocus/>
            </Segment>
            <Card.Group itemsPerRow={4} style={{maxHeight: '90vh', marginBottom: '10em', marginLeft: '9em'}}>
                {allClasses}
            </Card.Group>
            <Modal
                size='tiny'
                open={open}
                onClose={() => setOpen(false)}
            >
                <Modal.Header>Incomplete</Modal.Header>
                <Modal.Content>
                <p>You must name your character!</p>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default ClassesPage
