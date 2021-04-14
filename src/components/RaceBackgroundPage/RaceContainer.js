import React, { useState, useEffect } from 'react'
import RaceCard from './RaceCard'
import { Segment, Accordion } from 'semantic-ui-react'
import { request, gql } from 'graphql-request'


const RaceContainer = () => {
    const [races, setRaces] = useState([])
    const [selectedRace, setSelectedRace] = useState(-1)
    const query = gql`
    {
        races {
          name
          speed
          ability_bonuses{
            bonus
            ability_score{
              name
            }
          }
          starting_proficiencies{
            name
          }
          starting_proficiency_options {
            choose
            from {
              name
            }
          }
          languages{
            name
          }
          traits{
            name
          }
          trait_options{
              choose
            from {
              name
            }
          }
        }
        }
        `
    const allRaces = races.map(race => {
        return ( 
            <RaceCard
                key={race.name}
                name={race.name}
                speed={race.speed}
                languages={race.languages}
                traitOptions={race.trait_options}
                abilityBonuses={race.ability_bonuses}
                startingProficiencies={race.starting_proficiencies}
                startingProficiencyOptions={race.starting_proficiency_options}
                traits={race.traits}
                selectedRace={selectedRace}
                setSelectedRace={setSelectedRace}
                />
        )
        })
        useEffect(() => {
            request('https://www.dnd5eapi.co/graphql', query)
            .then((data) => {
                setRaces(data.races)
            })
        }, [query])
    return (
        <Segment style={{overflow: 'auto', maxHeight: '70vh', maxWidth: '50vw'}}>
            <Accordion styled>
                {allRaces}
            </Accordion>
        </Segment >
    )
}

export default RaceContainer
