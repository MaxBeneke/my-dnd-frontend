import React, { useState } from 'react'
import { Segment, Button, Grid } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'
import SpeedCard from './SpeedCard'

const ACSpeedContainer = () => {
    const [isEdit, setIsEdit] = useState(false)
    const character = useSelector((storeState) => storeState.character)
    const dispatch = useDispatch();

    const handleAdd = (attr) => {
        dispatch(updateCharacter({[attr]: (character[attr] + 1)}))
    }

    const handleSubtract = (attr) => {
        dispatch(updateCharacter({[attr]: (character[attr] - 1)}))
    }

    return (
        <Grid columns={2}>
       
        <Grid.Row height={1}>
        <Grid.Column>
            
        <Segment onDoubleClick={() => setIsEdit(true)}>
        {isEdit && <Button size='mini' color='blue' basic onClick={() => setIsEdit(false)}>Save</Button>}
        <h2>AC: {character.armorclass}</h2>
            {isEdit && 
                <div>
                    <Button compact basic size='mini' attached='left' icon='minus' onClick={() => {handleSubtract('armorclass')}} />
                    <Button compact basic size='mini' attached='right' icon='plus' onClick={() => {handleAdd('armorclass')}} />
                </div> 
            }
            {isEdit ? (
            <Grid columns={2}>
            <Grid.Column>
                    <Segment.Group compact>
                        <Segment basic>{character.hp_current}</Segment>
                        <Segment basic>
                            <Button compact basic size='mini' attached='top' icon='plus' onClick={() => {handleAdd('hp_current')}} />
                            <Button compact basic size='mini' attached='bottom' icon='minus' onClick={() => {handleSubtract('hp_current')}} />
                        </Segment>
                    </Segment.Group>
                    </Grid.Column>

                    <Grid.Column>  
                    <Segment.Group compact>
                        <Segment basic>{character.hp_max}</Segment>
                        <Segment basic>
                            <Button compact basic size='mini' attached='top' icon='plus' onClick={() => {handleAdd('hp_max')}} />
                            <Button compact basic size='mini' attached='bottom' icon='minus' onClick={() => {handleSubtract('hp_max')}} />
                        </Segment>
                    </Segment.Group>
                </Grid.Column>
            </Grid>
            ) : (
            <h4>HP: {character.hp_current}/{character.hp_max}</h4>
            ) }  
        </Segment>
        </Grid.Column>

        <Grid.Column>
            <SpeedCard />
        </Grid.Column>

        </Grid.Row>
        </Grid>
    )
}

export default ACSpeedContainer
