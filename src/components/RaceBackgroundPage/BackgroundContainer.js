import React, { useState, useEffect } from 'react'
import { Segment, Accordion } from 'semantic-ui-react'
import BackgroundCard from './BackgroundCard'


const BackgroundContainer = () => {
    const [backgrounds, setBackgrounds] = useState([])
    const [selectedBG, setSelectedBG] = useState(-1)

    useEffect(() => {
        fetch('http://localhost:3000/backgrounds/index').then(r => r.json()).then(backgrounds => {
            setBackgrounds(backgrounds)
        })
    }, [])
    console.log(backgrounds)
    const allBackgrounds = backgrounds.map(bg => {
        return ( 
            <BackgroundCard
                key={bg.name}
                skills={bg.skills}
                name={bg.name}
                desc={bg.desc}
                selectedBG={selectedBG}
                setSelectedBG={setSelectedBG}
                />
        )
    })

    return (
        <Segment style={{overflow: 'auto', maxHeight: '70vh', maxWidth: '50vw'}}>
            <Accordion styled>
                {allBackgrounds}
            </Accordion>
        </Segment >
    )
}

export default BackgroundContainer
