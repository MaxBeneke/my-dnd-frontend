import React, { useState, useEffect } from 'react'
import { Segment, Accordion, Header } from 'semantic-ui-react'
import BackgroundCard from './BackgroundCard'


const BackgroundContainer = () => {
    const [backgrounds, setBackgrounds] = useState([])
    const [selectedBG, setSelectedBG] = useState(-1)

    useEffect(() => {
        fetch(`https://app-my-dnd.herokuapp.com/backgrounds/index`).then(r => r.json()).then(backgrounds => {
            setBackgrounds(backgrounds)
        })
    }, [])

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
        <Segment color='red' style={{overflow: 'auto', height: '55vh', maxWidth: '50vw', backgroundColor: 'beige'}}>
            <Header as='h2' textAlign='center' style={{fontFamily: 'Aclonica'}}>Background</Header>
            <Accordion style={{marginLeft: '2em', marginTop: '1em', backgroundColor: 'bisque'}} styled>
                {allBackgrounds}
            </Accordion>
        </Segment >
    )
}

export default BackgroundContainer
