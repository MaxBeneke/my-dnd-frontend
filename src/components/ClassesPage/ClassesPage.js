import React from 'react'
import { Card, Image, Input } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { classImages } from '../../images/classImages'
import { updateCharacter } from '../redux/characterSlice'
import { useSelector, useDispatch } from 'react-redux'

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
        <Card key={character_class.name} onClick={() => {handleUpdateClass(character_class.name, character_class.hit_die)}}>
            <Image src={character_class.image}/>
            <Card.Content>
                <Card.Header textAlign="center">{character_class.name}</Card.Header>
            </Card.Content>
        </Card>
        )
    })

    return (
        <>
        <Card.Group itemsPerRow={4}>
            {allClasses}
        </Card.Group>
        <Input onChange={handleChange} value={character.name} placeholder="Name your character" />
        </>
    )
}

export default ClassesPage
