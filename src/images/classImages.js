export const classImages = [
    {name: "Barbarian",
    desc: "Living on the outskirts of society, barbarians are primal in nature. They can enter a berserker's rage that gives them superhuman strength and resilience.",
    hit_die: 12,
    color: 'orange'},

    {name: "Bard",
    desc: "Harnessing their magic through the tapestry of music and words, bards can inspire allies, manipulate foes, create illusions, and heal wounds.",
    hit_die: 8,
    color: 'purple'},

    {name: "Cleric",
    desc: "Clerics are intermediaries between the mortal world and the planes of the gods. They can be warriors or healers, imbued with their god's divine boons.",
    hit_die: 8,
    color: 'grey'},

    {name: "Druid",
    desc: "Whether calling upon the elemental forces of nature or the creatures of the natural world, druids are an embodiment of nature's resilience, cunning, and fury.",
    hit_die: 8,
    color: 'green'},

    {name: "Fighter",
    desc: "Be they a lone archer, a highly skilled battlemaster, or a bandit king, the one thing fighters have in common is their unparalleled command of weapons and armor.",
    hit_die: 10,
    color: 'brown'},

    {name: "Monk",
    desc: "Feeling the life energy that flows through their bodies, monks harness the power of ki to to increase their combat prowess, evasion tactics, or disrupt the energy of their enemies.",
    hit_die: 8,
    color: 'blue'},

    {name: "Paladin",
    desc: "Bound by an divine oath, the paladin is a holy warrior that vows to fight against evil and injustice as a blessed champion.",
    hit_die: 10, 
    color: 'yellow'},

    {name: "Ranger",
    desc: "Warriors of the wilderness, rangers hunt the monsters on the edges of civilization. They enhance their combat capabilities with magic to take down their foes.",
    hit_die: 10,
    color: 'dark green'},

    {name: "Rogue",
    desc: "Resourceful and skilled, rogues have a wide toolkit, whether that be sneaking into a mad wizard's lair, or charming the aristrocrats of high society to gain an advantage.",
    hit_die: 8,
    color: 'silver'},

    {name: "Sorcerer",
    desc: "Either born into magic through bloodlines, or having it thrust upon them by unknown cosmic forces, the sorcerer carries a chaotic, but powerful, magic storm inside them.",
    hit_die: 6,
    color: 'red'},

    {name: "Warlock",
    desc: "Seeking the answers of the multiverse, warlocks are often cunning characters who were granted power by a supernatural pact with a powerful being.",
    hit_die: 8,
    color: 'purple'},

    {name: "Wizard",
    desc: "Scholars of the arcane, wizards devote their life to studying magic, allowing them to cast spells of explosive fire, raise the dead, or open a portal to another dimension.",
    hit_die: 6,
    color: 'dark blue'}
]

export const helpObject = {
    'RaceBackground': "This page is where you choose your Race, Background, Personality Traits, as well as Alignment. Your race gives you bonuses to your core abilities as well as some extra features that are distinct to that race. Your background helps determine a bit about how to play your character and also gives you proficiency in two skills. The personality and alignment fields are yours to fill out how you please! Add as much or as little detail as possible, but it's recommended to be thorough enough to give you a baseline to roleplay with.",

    'Choices': "This page is where you choose bonus proficiencies, equipment, and spells all provided by your class! Some classes do not cast spells until later levels, so those options will not be available until you level up.",

    'AbilityScores': "This page is where you allocate ability score points! You have 27 points to dole out between all 6 of the major abilities. Each point added will reduce the point pool by 1, but if you want to increase your score to 14 or 15, you must spend 2 of the points in your pool. When you're done, you'll be able to add the extra bonuses you get from your race and complete your character."
}

export const autoComplete = {
    "Barbarian": {strength: 15, dexterity: 14, constitution: 14, intelligence: 8, wisdom: 12, charisma: 8},
    "Bard": {strength: 10, dexterity: 14, constitution: 11, intelligence: 10, wisdom: 12, charisma: 15},
    "Cleric": {strength: 13, dexterity: 12, constitution: 13, intelligence: 8, wisdom: 15, charisma: 12},
    "Druid": {strength: 12, dexterity: 12, constitution: 14, intelligence: 9, wisdom: 15, charisma: 10},
    "Fighter": {strength: 15, dexterity: 14, constitution: 14, intelligence: 8, wisdom: 12, charisma: 8},
    "Monk": {strength: 8, dexterity: 15, constitution: 14, intelligence: 10, wisdom: 14, charisma: 10},
    "Paladin": {strength: 15, dexterity: 10, constitution: 13, intelligence: 10, wisdom: 10, charisma: 14},
    "Ranger": {strength: 11, dexterity: 15, constitution: 12, intelligence: 10, wisdom: 14, charisma: 10},
    "Rogue": {strength: 8, dexterity: 15, constitution: 12, intelligence: 13, wisdom: 12, charisma: 13},
    "Sorcerer": {strength: 8, dexterity: 14, constitution: 14, intelligence: 8, wisdom: 12, charisma: 15},
    "Warlock": {strength: 8, dexterity: 12, constitution: 14, intelligence: 11, wisdom: 12, charisma: 15},
    "Wizard": {strength: 8, dexterity: 14, constitution: 14, intelligence: 15, wisdom: 10, charisma: 10},
}