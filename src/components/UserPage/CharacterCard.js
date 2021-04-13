import React from 'react'
import { Item, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { updateUser } from '../redux/userSlice'
import { useDispatch } from 'react-redux'

const CharacterCard = ({ level, character_class, race, subrace, name, id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const toCharacterSheet = (id) => {
        history.push(`/character/${id}`)
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/character/${id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(user => dispatch(updateUser(user)))
    }

    return ( 
        <>
        <Item onClick={()=> {toCharacterSheet(id)}}>
         <Item.Image size='tiny' src='/images/wireframe/image.png' />
            <Item.Content>
            <Item.Header as='a'>{name}</Item.Header>
            <Item.Meta>{subrace && subrace} {race} {character_class}</Item.Meta>
            <Item.Extra>Level: {level}</Item.Extra>
            </Item.Content>
        </Item> 
        <Button floated='right' onClick={()=> {handleDelete(id)}}>Delete</Button>    
        </> 
    )
}

export default CharacterCard
