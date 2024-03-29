import React, { useState, useEffect } from 'react'
import { Grid, Button, Segment, Header, Modal } from 'semantic-ui-react'
import { gql, request } from 'graphql-request'
import { useSelector, useDispatch } from 'react-redux'
import { updateCharacter } from '../redux/characterSlice'
import CantripChoices from './CantripChoices'
import SkillChoices from './SkillChoices'
import EquipmentChoices from './EquipmentChoices'
import SpellChoices from './SpellChoices'
import { useHistory } from 'react-router-dom'
import { helpObject } from '../../images/classImages'

const ChoicesPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [spellInfo, setSpellInfo] = useState([])
  const [classInfo, setClassInfo] = useState([])
  const [slotInfo, setSlotInfo] = useState([])
  const [cantripInfo, setCantripInfo] = useState([])
  const [openHelp, setOpenHelp] = useState(false)
  const [openIncomplete, setOpenIncomplete] = useState(false)
  const [incompleteContent, setIncompleteContent] = useState('')

  const handleIncomplete = (input) => {
    setIncompleteContent(input)
    setOpenIncomplete(true)
  }

  const abilityRef = {"STR": "strength", "DEX": "dexterity", "CON": "constitution", "INT": "intelligence", "WIS": "wisdom", "CHA": "charisma"} 

  const character = useSelector((storeState) => storeState.character)

  const nameVariable = {name: character.character_class}

  const spellQuery = gql`
  query getSpells($name: String){
      spells(filter: {classes: {name: $name}, level: 1}){
        name
        desc
      }	
    }
  `
  const classQuery = gql`
  query getClass($name: String){
      class(filter: {name: $name}){
        name
        saving_throws {
          name
        }
        starting_equipment {
          equipment{
            name
          }
        }
        proficiency_choices{
          choose
          from{
            name
          }  
        }
        starting_equipment_options {
          choose
          from{
            equipment{
              name
            }
          }
        }
        spellcasting{
          spellcasting_ability{
            name
          }
        }
      }
    }
  `
  const slotQuery = gql`
  query getSpellSlots($name: String) {
    level(filter: {class: {name: $name} level: 1}){
      spellcasting{
        spells_known
        spell_slots_level_1
        cantrips_known
      }
    }
  }
  `
  const cantripQuery = gql`
  query getSpells($name: String){
      spells(filter: {classes: {name: $name}, level: 0}){
        name
        desc
      }	
    }
  `
  useEffect(() => {
      request('https://www.dnd5eapi.co/graphql', spellQuery, nameVariable).then((spells) => setSpellInfo(spells))
      request('https://www.dnd5eapi.co/graphql', classQuery, nameVariable).then((classData) => setClassInfo(classData))
      request('https://www.dnd5eapi.co/graphql', slotQuery, nameVariable).then((slots) => setSlotInfo(slots))
      request('https://www.dnd5eapi.co/graphql', cantripQuery, nameVariable).then((cantrips) => setCantripInfo(cantrips))
  },[classQuery, slotQuery, spellQuery])
  const handleSubmit = () => {
    const savingThrows = classInfo.class.saving_throws.map(st => abilityRef[st.name])
    dispatch(updateCharacter({skills: [...character.skills, ...savingThrows]}))
    history.push('./ability-score')
  }
  return (
    <Segment basic padded>
      <Header as='h1' textAlign='center' style={{fontFamily: 'Aclonica', marginLeft: '2.5em'}}>
        Choices
        <Button color='purple' floated='right' onClick={() => setOpenHelp(true)}>
          Help
        </Button>
      </Header>

      <Grid>
          <Grid.Row height={slotInfo?.level?.spellcasting?.spells_known || slotInfo?.level?.spellcasting?.spell_slots_level_1 ? 8 : 16}>
              <Grid.Column width={8}>
              <Segment style={{overflow: 'auto', height: '40vh', backgroundColor: 'beige'}}>
                <Header as='h2' textAlign='center' style={{fontFamily: 'Aclonica'}}>Skills</Header>
                  <SkillChoices
                    handleIncomplete={handleIncomplete}
                    classInfo={classInfo}
                  />
              </Segment>
              </Grid.Column>
              <Grid.Column width={8}>
              <Segment style={{overflow: 'auto', height: '40vh', backgroundColor: 'beige'}}>
                <Header as='h2' textAlign='center' style={{fontFamily: 'Aclonica'}}>Equipment</Header>
                  <EquipmentChoices
                      classInfo={classInfo}
                  />
                </Segment>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              <Grid.Column width={8}>
              <Segment style={{overflow: 'auto', height: '40vh', backgroundColor: 'beige'}}>
                <Header as='h2' textAlign='center' style={{fontFamily: 'Aclonica'}}>Spells</Header>
                  <SpellChoices 
                      handleIncomplete={handleIncomplete}
                      spellInfo={spellInfo}
                      slotInfo={slotInfo}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={8}>
              <Segment style={{overflow: 'auto', height: '40vh', backgroundColor: 'beige'}}>
                  <Header as='h2' textAlign='center' style={{fontFamily: 'Aclonica'}}>Cantrips</Header>
                  <CantripChoices
                      handleIncomplete={handleIncomplete}
                      cantripInfo={cantripInfo}
                      slotInfo={slotInfo}
                      />
                </Segment>
              </Grid.Column>
          </Grid.Row>
          
      </Grid>
      <Button onClick={handleSubmit} color='red' style={{marginLeft: '46.25em', marginTop: '.5em'}}>Next Page</Button>
      <Modal
            name='Help'
            size='small'
            open={openHelp}
            onClose={() => setOpenHelp(false)}
        >
            <Modal.Header>Choices</Modal.Header>
            <Modal.Content>
            <p>{helpObject['Choices']}</p>
            </Modal.Content>
        </Modal>
        <Modal
            name='Incomplete'
            size='small'
            open={openIncomplete}
            onClose={() => setOpenIncomplete(false)}
        >
            <Modal.Header>Choices</Modal.Header>
            <Modal.Content>
            <p>{incompleteContent}</p>
            </Modal.Content>
        </Modal>
      </Segment>
  )
}

export default ChoicesPage
