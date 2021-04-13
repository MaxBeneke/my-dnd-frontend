import React from 'react'
import { Grid } from 'semantic-ui-react'
import AbilityScoreCard from './AbilityScoreCard'

const AbilityScoreContainer = ({ strength, dexterity, constitution, intelligence, wisdom, charisma }) => {
   
    return (
        <Grid rows={6}>
            <Grid.Row>
                <AbilityScoreCard key="Strength" ability="Strength" score={strength} />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="Dexterity" ability="Dexterity" score={dexterity} />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="Constitution" ability="Constitution" score={constitution} />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="Intelligence" ability="Intelligence" score={intelligence} />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="Wisdom" ability="Wisdom" score={wisdom} />
            </Grid.Row>
            <Grid.Row>
                <AbilityScoreCard key="Charisma" ability="Charisma" score={charisma} />
            </Grid.Row>
        </Grid>
    )
}

export default AbilityScoreContainer
