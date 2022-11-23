const clefs = [
    {
        name: 'Treble',
        image: null,
        notes: [
            {type: 'line', note: 'C6', staff: false},
            {type: 'space', note: 'B5', staff: false},
            {type: 'line', note: 'A5', staff: false},
            {type: 'space', note: 'G5', staff: false},

            {type: 'line', note: 'F5', staff: true},
            {type: 'space', note: 'E5', staff: true},
            {type: 'line', note: 'D5', staff: true},
            {type: 'space', note: 'C5', staff: true},
            {type: 'line', note: 'B4', staff:  true},
            {type: 'space', note: 'A4', staff: true},
            {type: 'line', note: 'G4', staff: true},
            {type: 'space', note: 'F4', staff: true},
            {type: 'line', note: 'E4', staff: true},

            {type: 'space', note: 'D4', staff: false},
            {type: 'line', note: 'C4', staff: false},
            {type: 'space', note: 'B3', staff: false},
            {type: 'line', note: 'A3', staff: false},
        ],
    },
    {
        name: 'Alto',
        image: null,
        notes: [
            {type: 'line', note: 'D5', staff: false},
            {type: 'space', note: 'C5', staff: false},
            {type: 'line', note: 'B4', staff: false},
            {type: 'space', note: 'A4', staff: false},
            {type: 'line', note: 'G4', staff: true},
            {type: 'space', note: 'F4', staff: true},
            {type: 'line', note: 'E4', staff: true},
            {type: 'space', note: 'D4', staff: true},
            {type: 'line', note: 'C4', staff: true},
            {type: 'space', note: 'B3', staff: true},
            {type: 'line', note: 'A3', staff: true},
            {type: 'space', note: 'G3', staff: true},
            {type: 'line', note: 'F3', staff: true},
            {type: 'space', note: 'E3', staff: false},
            {type: 'line', note: 'D3', staff: false},
            {type: 'space', note: 'C3', staff: false},
            {type: 'line', note: 'B2', staff: false}
        ]
    },
    {
        name: 'Bass',
        image: null,
        notes: [
            {type: 'line', note: 'E4', staff: false},
            {type: 'space', note: 'D4', staff: false},
            {type: 'line', note: 'C4', staff: false},
            {type: 'space', note: 'B3', staff: false},
            {type: 'line', note: 'A3', staff: true},
            {type: 'space', note: 'G3', staff: true},
            {type: 'line', note: 'F3', staff: true},
            {type: 'space', note: 'E3', staff: true},
            {type: 'line', note: 'D3', staff: true},
            {type: 'space', note: 'C3', staff: true},
            {type: 'line', note: 'B2', staff: true},
            {type: 'space', note: 'A2', staff: true},
            {type: 'line', note: 'G2', staff: true},
            {type: 'space', note: 'F2', staff: false},
            {type: 'line', note: 'E2', staff: false},
            {type: 'space', note: 'D2', staff: false},
            {type: 'line', note: 'C2', staff: false}
        ]
    },
]
export default clefs

