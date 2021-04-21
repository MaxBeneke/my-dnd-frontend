import React from 'react'
import { Item, Header, List } from 'semantic-ui-react'
import human from '../../images/human.png'
import elf from '../../images/elf.png'
import dwarf from '../../images/dwarf.png'
import halfling from '../../images/halfling.png'
import halfElf from '../../images/halfElf.png'
import halfOrc from '../../images/halfOrc.png'
import gnome from '../../images/gnome.png'
import dragonborn from '../../images/dragonborn.png'
import tiefling from '../../images/tiefling.png'

const CharacterInfoCard = ({ name, level, background, character_class, race, alignment }) => {
    const imageObj = {'Human': human, 'Halfling': halfling, 'Elf': elf, 'Dwarf': dwarf, 'Half-Elf': halfElf, 'Half-Orc': halfOrc, 'Gnome': gnome, 'Tiefling': tiefling, 'Dragonborn': dragonborn}

    return (
        <Item>
           <Item.Content verticalAlign='middle'>
               <Item.Image size='small' 
               floated='right' 
               style={{marginRight: '1em'}} 
               src={imageObj[race]} 
            />
           <Header as='h2' style={{fontFamily:'Aclonica'}}>{name}</Header>
                <List>
                    <li>Level: {level}</li>    
                    <li>{race} {character_class}</li>
                    <li>{alignment}</li>
                    <li>Background: {background}</li>
                </List>
            </Item.Content> 
        </Item>
    )
}

export default CharacterInfoCard
