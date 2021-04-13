import React from 'react'
import { Grid } from 'semantic-ui-react'
import SpeedCard from './SpeedCard'
import HitDiceCard from './HitDiceCard'
import RollDiceCard from './RollDiceCard'
import HPCard from './HPCard'


const HPContainer = ({hp_max, hp_current, armorclass, speed, dexterity}) => {
    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <HPCard hp_max={hp_max} hp_current={hp_current} armorclass={armorclass}/>
                </Grid.Column>
                <Grid.Column>
                    <SpeedCard speed={speed} dexterity={dexterity} />
                </Grid.Column>
            </Grid.Row>
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

export default HPContainer
