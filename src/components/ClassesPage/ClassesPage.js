import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { classImages } from '../../images/classImages'
import { updateCharacter } from '../redux/characterSlice'
import { useSelector, useDispatch } from 'react-redux'

const ClassesPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((storeState) => storeState.user)

    const handleUpdateClass = (name) => {
        
        const updateObj = {character_class: name, user_id: user.id, level: 1, armorclass: 12, hp_max: 10, hp_current: 10}
        dispatch(updateCharacter(updateObj))
        history.push('/race-background')
    }
    
    const allClasses = classImages.map(character_class => {
        return (
        <Card onClick={() => {handleUpdateClass(character_class.name)}}>
            <Image src={character_class.image}/>
            <Card.Content>
                <Card.Header textAlign="center">{character_class.name}</Card.Header>
            </Card.Content>
        </Card>
        )
    })

    return (
        <Card.Group itemsPerRow={4}>
            {allClasses}
        </Card.Group>
    )
}

export default ClassesPage
