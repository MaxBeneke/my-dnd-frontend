import React, { useState } from 'react'
import { Popup, Button, Card } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'

const AlignmentButton = ({ desc, abbreviation, name }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const [clicked, setClicked] = useState(false)
    return (
        <Card>
        <Popup
            trigger={ <Button
                content={abbreviation}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={() => dispatch(updateCharacter({alignment: name}))}
                active={clicked}
                /> }
            content={desc}
            open={open}
            basic
        />
        </Card>
    )
}

export default AlignmentButton
