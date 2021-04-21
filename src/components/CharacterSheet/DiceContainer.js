import React from 'react'
import { Grid } from 'semantic-ui-react'
import HitDiceCard from './HitDiceCard'
import RollDiceCard from './RollDiceCard'

const DiceContainer = () => {
    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <HitDiceCard />
                </Grid.Column>
                <Grid.Column>
                    <RollDiceCard />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default DiceContainer
