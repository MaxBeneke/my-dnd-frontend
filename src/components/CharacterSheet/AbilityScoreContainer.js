import React from 'react'
import { Grid } from 'semantic-ui-react'
import AbilityScoreCard from './AbilityScoreCard'

const AbilityScoreContainer = () => {
   
    return (
        <Grid rows={6}>
            <Grid.Row>
                <AbilityScoreCard key="strength" ability="strength" />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="dexterity" ability="dexterity" />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="constitution" ability="constitution" />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="intelligence" ability="intelligence" />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="wisdom" ability="wisdom" />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="charisma" ability="charisma" />
            </Grid.Row>
        </Grid>
    )
}

export default AbilityScoreContainer
