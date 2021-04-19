import React, { useState } from 'react'
import { Popup, Button, Card } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'

const AlignmentButton = ({ desc, abbreviation, name, active, setActive }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)

    const handleClick = (e) => {
        console.log(e.target)
        setActive(e.target.name)
        dispatch(updateCharacter({alignment: name}))
    }
    return (
        <Card>
        <Popup
            trigger={ <Button
                name={abbreviation}
                content={abbreviation}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={handleClick}
                toggle
                active={active === abbreviation}
                /> }
            content={desc}
            open={open}
            basic
        />
        </Card>
    )
}

export default AlignmentButton
