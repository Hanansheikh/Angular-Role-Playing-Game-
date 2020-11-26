export enum RaceOptions {

    human="Human",
    dwarf="Dwarf",
    elf="Elf",
    halfing="Halfing"
}
export enum ClassOptions{
    warrior="Warrior",
    ranger="Ranger",
    rogue="Rogue",
    priest="Priest"
}
export enum GenderOptions{
    male="Male",
    female="Female"
}

export const CharacterOptions={
    race:[
        RaceOptions.human,
        RaceOptions.dwarf,
        RaceOptions.elf,
        RaceOptions.halfing

    ],
    classes:[
        ClassOptions.warrior,
        ClassOptions.ranger,
        ClassOptions.rogue,
        ClassOptions.priest

    ],
    genders:[
        GenderOptions.male,
        GenderOptions.female

    ]
}