export const test = {
    title: 'Title',
    composer: 'Composor',
    bpm: 60,
    instrument: 'synth',
    samples: null,
    measures: [
        {
            clef: 'treble',
            timeSignature: [4,4],
            key: 'C',
            beats: [['C4'],['B4', 'B4'],['D4','D4','D4','D4'],['G4']]
        },
        {
            clef: 'treble',
            timeSignature: [4,4],
            key: 'C',
            beats: [['C4'],['B4', 'B4'],['D4','D4','D4','D4'],['G4']]
        },
        {
            clef: 'treble',
            timeSignature: [4,4],
            key: 'C',
            beats: [['C4'],['B4', 'B4'],['D4','D4','D4','D4'],['G4']]
        }
    ]
}


// include 5 ledger lines above and 5 ledger lines below
// should we be saving the data by note or by placement on the staff
// seems like the data should be saved by the note and interpruted by the UI for placement