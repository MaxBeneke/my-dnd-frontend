import React from 'react'
import { Item, Button, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { updateUser } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import human from '../../images/human.png'
import elf from '../../images/elf.png'
import dwarf from '../../images/dwarf.png'
import halfling from '../../images/halfling.png'
import halfElf from '../../images/halfElf.png'
import halfOrc from '../../images/halfOrc.png'
import gnome from '../../images/gnome.png'
import dragonborn from '../../images/dragonborn.png'
import tiefling from '../../images/tiefling.png'

const CharacterCard = ({ level, character_class, race, subrace, name, id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const imageObj = {'Human': human, 'Halfling': halfling, 'Elf': elf, 'Dwarf': dwarf, 'Half-Elf': halfElf, 'Half-Orc': halfOrc, 'Gnome': gnome, 'Tiefling': tiefling, 'Dragonborn': dragonborn}

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
        <Segment raised size='large' style={{width: '40em'}}>
            <Item>
            <Item.Image size='small'  src={imageObj[race]} className='pointer' onClick={()=> {toCharacterSheet(id)}}/>
                <Item.Content>
                    <Item.Header as='a' className='fancy'>{name}</Item.Header>
                    <Item.Meta>{subrace && subrace} {race} {character_class}</Item.Meta>
                        Level: {level}
                    <Item.Extra>
                        <Button color='red' onClick={()=> {handleDelete(id)}}>Delete</Button>    
                    </Item.Extra>
                </Item.Content>
            </Item> 
        </Segment>
    )
}

export default CharacterCard
