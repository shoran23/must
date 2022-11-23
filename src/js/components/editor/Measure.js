import React, { useEffect, useState } from 'react'

import clefs from '../../constants/clefs'

export default function Measure(props) {
    const [clef, setClef] = useState(clefs[0])

    const handleNoteSelect = (note) => {
        console.log('index = ',note)
    }

    return (
        <div className='editor-sheet-measure'>
            
            {clef.notes.map((note, index) => (
                <React.Fragment key={`clef-fragment-${index}`}>
                    {note.type === 'line' ?
                        <React.Fragment key={`clef-line-fragment-${index}`}>
                            {note.staff ?
                                <div className='editor-sheet-measure-line measure-line-space' key={`clef-line-${index}`} onClick={() => handleNoteSelect(note)}/>
                            :
                                <div className='editor-sheet-measure-line-ledger measure-line-space' key={`clef-line-ledger-${index}`} onClick={() => handleNoteSelect(note)}/>
                            }
                        </React.Fragment>
                    :
                        <React.Fragment key={`clef-space-fragment-${index}`}>
                            {note.staff ?
                                <div className='editor-sheet-measure-space measure-line-space' key={`clef-space-${index}`} onClick={() => handleNoteSelect(note)}/>
                            :
                                <div className='editor-sheet-measure-space-ledger measure-line-space' key={`clef-space-ledger-${index}`} onClick={() => handleNoteSelect(note)}/>
                            }
                        </React.Fragment>
                    }
                </React.Fragment>
            ))}
        </div>
    )
}