import React from 'react'
import { Grid } from 'semantic-ui-react'
import AbilityScoreCard from './AbilityScoreCard'

const AbilityScoreContainer = () => {
   
    return (
        <Grid columns={6}>
            <Grid.Column>
                <AbilityScoreCard key="strength" ability="strength" />
            </Grid.Column>
            <Grid.Column>
                <AbilityScoreCard key="dexterity" ability="dexterity" />
            </Grid.Column>
            <Grid.Column>
                <AbilityScoreCard key="constitution" ability="constitution" />
            </Grid.Column>
            <Grid.Column>
                <AbilityScoreCard key="intelligence" ability="intelligence" />
            </Grid.Column>
            <Grid.Column>
                <AbilityScoreCard key="wisdom" ability="wisdom" />
            </Grid.Column>
            <Grid.Column>
                <AbilityScoreCard key="charisma" ability="charisma" />
            </Grid.Column>
        </Grid>
    )
}

export default AbilityScoreContainer
