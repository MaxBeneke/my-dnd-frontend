import React, { useState } from 'react'
import { Segment, Dropdown, Button, Modal } from 'semantic-ui-react'

const RollDiceCard = () => {
    const [result, setResult] = useState("")
    const [dice, setDice] = useState(4)
    const [openModal, setOpenModal] = useState(false)
    const options = [
        { key: 4, text: 'd4', value: 4 },
        { key: 6, text: 'd6', value: 6 },
        { key: 8, text: 'd8', value: 8 },
        { key: 10, text: 'd10', value: 10 },
        { key: 12, text: 'd12', value: 12 },
        { key: 20, text: 'd20', value: 20},
        { key: 100, text: 'd100', value: 100 },   
    ]

    const randomNumberGenerator = (max) => {
        return Math.floor(Math.random() * (max) + 1);
    }

    const handleRoll = () => {
        const num = randomNumberGenerator(dice);
        if (parseInt(dice) === 20 && parseInt(num) === 20) {
            setOpenModal(true)
        }
        setResult(num);
    }

    const handleChange = (e) => {
        const num = e.target.textContent.slice(1)
        setDice(num)
    }
    
    return (
        <Segment>
            <Dropdown 
                onChange={handleChange}
                options={options}
                placeholder={"d" + dice}
                selection
                value={dice}
            />
            <Button onClick={handleRoll}>Roll!</Button>
            Result: {result}
        <Modal
            size='medium'
            open={openModal}
            onClose={() => setOpenModal(false)}
        >
            <Modal.Header style={{fontFamily: 'Aclonica'}}>NAT 20!!!</Modal.Header>
            <Modal.Content>
                <h3>You rolled a natural 20! That's amazing!</h3>
            </Modal.Content>
        </Modal>
        </Segment>
    )
}

export default RollDiceCard
