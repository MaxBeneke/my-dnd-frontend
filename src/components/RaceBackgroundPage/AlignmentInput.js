import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import { request, gql } from 'graphql-request'
import AlignmentButton from './AlignmentButton'

const AlignmentInput = () => {
    const [alignments, setAlignments] = useState([])
    const query = gql`
    {
        alignments{
          name
          desc
          abbreviation
        }
      }
      `
    useEffect(() => {
        request('https://www.dnd5eapi.co/graphql', query)
        .then((data) => {
            setAlignments(data.alignments)
        })
    }, [query])

    const allAlignments = alignments.map(align => {
        return (
            <AlignmentButton
                key={align.abbreviation}
                abbreviation={align.abbreviation}
                desc={align.desc}
                name={align.name}
            />
        )
    })

    return (
        <Card.Group itemsPerRow={3} >
            {allAlignments}
        </Card.Group>
    )
}

export default AlignmentInput
