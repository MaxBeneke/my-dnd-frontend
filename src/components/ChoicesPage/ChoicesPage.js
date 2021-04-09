import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { gql, request } from 'graphql-request'
import { useSelector } from 'react-redux'
import CantripChoices from './CantripChoices'
import SkillChoices from './SkillChoices'
import EquipmentChoices from './EquipmentChoices'
import SpellChoices from './SpellChoices'

const ChoicesPage = () => {
    const [spellInfo, setSpellInfo] = useState([])
    const [classInfo, setClassInfo] = useState([])
    const [slotInfo, setSlotInfo] = useState([])
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
        level(filter: {class: {name: $name}}){
          spellcasting{
            spells_known
            spell_slots_level_1
            cantrips_known
          }
        }
      }
    `
    useEffect(() => {
        request('https://www.dnd5eapi.co/graphql', spellQuery, nameVariable).then((spells) => setSpellInfo(spells))
        request('https://www.dnd5eapi.co/graphql', classQuery, nameVariable).then((classData) => setClassInfo(classData))
        request('https://www.dnd5eapi.co/graphql', slotQuery, nameVariable).then((slots) => setSlotInfo(slots))
    },[])
    
    return (
        <Grid>
            <Grid.Row height={slotInfo?.level?.spellcasting?.spells_known || slotInfo?.level?.spellcasting?.spell_slots_level_1 ? 8 : 16}>
                <Grid.Column width={8}>
                    <SkillChoices
                        classInfo={classInfo}
                    />
                </Grid.Column>
                <Grid.Column width={8}>
                    <EquipmentChoices
                        classInfo={classInfo}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <SpellChoices 
                        spellInfo={spellInfo}
                        slotInfo={slotInfo}
                    />
                </Grid.Column>
                <Grid.Column width={8}>
                    <CantripChoices
                        spellInfo={spellInfo}
                        slotInfo={slotInfo}
                    />
                </Grid.Column>
            </Grid.Row>
            
        </Grid>
    )
}

export default ChoicesPage
