import React, { useState } from 'react'
import {Card, Dimmer, Image, Header, Button} from 'semantic-ui-react'
import { classImages } from '../../images/classImages'
import barbarian from '../../images/barbarian.png'
import bard from '../../images/bard.png'
import cleric from '../../images/cleric.png'
import druid from '../../images/druid.png'
import fighter from '../../images/fighter.png'
import monk from '../../images/monk.png'
import ranger from '../../images/ranger.png'
import rogue from '../../images/rogue.png'
import paladin from '../../images/paladin.png'
import warlock from '../../images/warlock.png'
import sorcerer from '../../images/sorcerer.png'
import wizard from '../../images/wizard.png'

const ClassCard = ({ name, handleUpdateClass, hit_die }) => {
    const [active, setActive] = useState(false)
    const imageObj = {"Barbarian": barbarian, "Bard": bard, "Cleric": cleric, "Druid": druid, "Fighter": fighter, "Monk": monk, "Paladin": paladin, "Ranger": ranger, "Rogue": rogue, "Sorcerer": sorcerer, "Warlock": warlock, "Wizard": wizard}
    const classObj = classImages.find(obj => obj.name === name)

    const content = ( 
                <div>
                    <p style={{fontSize: '12px', textAlign: 'justified'}}>{classObj?.desc}</p>
                    <Button basic 
                    inverted 
                    color={classObj.color} 
                    compact 
                    size="mini"
                    onClick={() => {handleUpdateClass(name, hit_die)}}
                    >
                    Choose
                    </Button>
                </div>
            )

    return (
        <Card key={name}
        onClick={() => {}} 
            style={{width: '14em', height: '16em', padding: '1em', marginLeft: '50px', marginRight: '50px'}}>
        <Dimmer.Dimmable 
            as={Image}
            src={imageObj[name]}
            dimmed={active}
            dimmer={{active, content}}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        />
        <Card.Content>
            <Card.Header textAlign="center">{name}</Card.Header>
        </Card.Content>
        </Card>
    )
}

export default ClassCard
