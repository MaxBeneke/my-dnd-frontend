import React from 'react'
import { Grid } from 'semantic-ui-react'
import RaceContainer from './RaceContainer'
import BackgroundContainer from './BackgroundContainer'
import PersonalityInput from './PersonalityInput'
import AlignmentInput from './AlignmentInput'

const RaceBackgroundPage = () => {
    return (
       <Grid style={{padding:'.5em'}}>
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
                   name="Personality" 
                   placeholder="Write down some personality traits..."
                    />
               </Grid.Column>
               <Grid.Column width={3}>
                   <PersonalityInput 
                   name="Ideals" 
                   placeholder="Write down your character's ideals..."
                    />
               </Grid.Column>
               <Grid.Column width={4}>
                   <AlignmentInput />
               </Grid.Column>
               <Grid.Column width={3}>
                   <PersonalityInput 
                   name="Flaws"
                   placeholder="Write down some flaws your character has..."
                    />
               </Grid.Column>
               <Grid.Column width={3}>
                   <PersonalityInput 
                   name="Bonds" 
                   placeholder="Write a person or place that your character is attached to..."
                    />
               </Grid.Column>
           </Grid.Row>
       </Grid>
    )
}

export default RaceBackgroundPage
