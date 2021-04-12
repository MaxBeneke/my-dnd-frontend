import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import RaceContainer from './RaceContainer'
import BackgroundContainer from './BackgroundContainer'
import PersonalityInput from './PersonalityInput'
import AlignmentInput from './AlignmentInput'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const RaceBackgroundPage = () => {
    const history = useHistory();
    const character = useSelector((storeState) => storeState.character)
    const handleSubmit = () => {
        if (character.personality && character.ideals && character.race && character.flaws && character.alignment && character.bonds && character.background) {
            history.push('./choices')
        } else {
            alert('Please fill out every field!')
        }
    }
    return (
        <>
       <Grid style={{padding:'1em'}}>
           <Grid.Row height={8}>
               <Grid.Column width={8}>
                    <RaceContainer />       
               </Grid.Column>
               <Grid.Column width={8}>
                   <BackgroundContainer />
               </Grid.Column>
           </Grid.Row>
           <Grid.Row height={8}>
               <Grid.Column width={3}>
                   <PersonalityInput
                   key="Personality"
                   name="Personality" 
                   placeholder="Write down some personality traits..."
                    />
               </Grid.Column>
               <Grid.Column width={3}>
                   <PersonalityInput 
                   key="Ideals"
                   name="Ideals" 
                   placeholder="Write down your character's ideals..."
                    />
               </Grid.Column>
               <Grid.Column width={4}>
                   <AlignmentInput />
               </Grid.Column>
               <Grid.Column width={3}>
                   <PersonalityInput 
                   key="Flaws"
                   name="Flaws"
                   placeholder="Write down some flaws your character has..."
                    />
               </Grid.Column>
               <Grid.Column width={3}>
                   <PersonalityInput 
                   key="Bonds"
                   name="Bonds" 
                   placeholder="Write a person or place that your character is attached to..."
                    />
               </Grid.Column>
           </Grid.Row>
       </Grid>
       <Button onClick={handleSubmit} content='Submit' floated='right' />
       </>
    )
}

export default RaceBackgroundPage
