import React, { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import ScoreCounter from './ScoreCounter'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../redux/userSlice'
import { updateCharacter } from '../redux/characterSlice'

const AbilityScorePage = () => {
    const user = useSelector((storeState) => storeState.user)
    const dispatch = useDispatch();
    const character = useSelector((storeState) => storeState.character)
    const history = useHistory();
    const [abilityScores, setAbilityScores] = useState([])
    const [bigCounter, setBigCounter] = useState(27)
    const [armorCheck, setArmorCheck] = useState(false)
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

    const handleAC = () => {
        let ac = (Math.floor((character.dexterity - 10) / 2)) + 10
        let hp = (Math.floor((character.constitution - 10) / 2)) + character.hit_die
        setArmorCheck(true)
        dispatch(updateCharacter({armorclass: ac, hp_max: hp, hp_current: hp}))
    }

    const handleSubmit = () => {
        if (bigCounter > 0) {
            alert('You still have more points to assign!')
        } else if (!armorCheck) {
            alert('You have to add your race bonuses')
        } else {
            fetch('http://localhost:3000/characters', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(character)
            })
            .then(r => r.json())
            .then(updatedUser => {
                dispatch(updateUser(updatedUser));
                console.log(updatedUser.characters)
                history.push(`./character/${updatedUser.characters[updatedUser.characters.length - 1].id}`)
            })
        }
    }

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
         <Button onClick={handleSubmit}>Create my Character!</Button>
         {bigCounter === 0 && <Button onClick={handleAC}>Add my Bonuses</Button>}   
        </div>
    )
}

export default AbilityScorePage
