import React, { useState, useContext } from 'react'

import clefs from '../../constants/clefs'

import { PlayerContext } from '../../context/PlayerContext'

export default function Measure(props) {
    const [clef, setClef] = useState(clefs[0])
    const playerContext = useContext(PlayerContext)

    const handleNoteSelect = (note) => {

    }

    return (
        <div className='editor-sheet-measure'>
            <div className='editor-sheet-measure-divider'/>
            <div className='editor-sheet-measure-center'>
                {clef.notes.map((note, index) => (
                    <React.Fragment key={`clef-fragment-${index}`}>
                        {note.type === 'line' ?
                            <React.Fragment key={`clef-line-fragment-${index}`}>
                                {note.staff ?
                                    <div className='editor-sheet-measure-line measure-line-space' key={`clef-line-${index}`} onClick={() => handleNoteSelect(note.note)}/>
                                :
                                    <div className='editor-sheet-measure-line-ledger measure-line-space' key={`clef-line-ledger-${index}`} onClick={() => handleNoteSelect(note.note)}/>
                                }
                            </React.Fragment>
                        :
                            <React.Fragment key={`clef-space-fragment-${index}`}>
                                {note.staff ?
                                    <div className='editor-sheet-measure-space measure-line-space' key={`clef-space-${index}`} onClick={() => handleNoteSelect(note.note)}/>
                                :
                                    <div className='editor-sheet-measure-space-ledger measure-line-space' key={`clef-space-ledger-${index}`} onClick={() => handleNoteSelect(note.note)}/>
                                }
                            </React.Fragment>
                        }
                    </React.Fragment>
                ))}
            </div>
            <div className='editor-sheet-measure-divider'/>
        </div>
    )
}