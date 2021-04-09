import React from 'react'
import { Form } from 'semantic-ui-react'

const SkillChoices = ({ classInfo }) => {
    const skillArray = classInfo?.class?.proficiency_choices?.find(chooseObj => chooseObj.from[0].name.includes("Skill"))
    return (
        <Form>
            <Form.Group grouped>

            </Form.Group>
        </Form>
    )
}

export default SkillChoices
