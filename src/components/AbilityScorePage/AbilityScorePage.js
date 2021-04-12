import React, { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import ScoreCounter from './ScoreCounter'

const AbilityScorePage = () => {
    const [abilityScores, setAbilityScores] = useState([])
    const [bigCounter, setBigCounter] = useState(27)
    console.log(abilityScores)
    const query = gql`
    {
        abilityScores{
          full_name
            name
              desc
        }
      }
    `

    const addBigCounter = (num) => {
        setBigCounter(count => count + num)
    }
    const subtractBigCounter = (num) => {
        setBigCounter(count => count - num)
    }

    useEffect(() =>{
        request('https://www.dnd5eapi.co/graphql', query).then(scores => {setAbilityScores(scores.abilityScores)})
    },[])

    const scoreMap = abilityScores.map(score => {
        return <ScoreCounter
            abbr={score.name}
            fullName={score.full_name}
            desc={score.desc}
            bigCounter={bigCounter}
            addBigCounter={addBigCounter}
            subtractBigCounter={subtractBigCounter}        
        />
    })


    return (
        <div>
            <h1>{bigCounter}</h1>
         {scoreMap}   
        </div>
    )
}

export default AbilityScorePage
