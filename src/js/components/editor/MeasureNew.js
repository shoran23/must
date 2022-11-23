import React, { useEffect, useState } from 'react'

import clefs from '../../constants/clefs'

export default function MeasureNew(props) {
    const [clef, setClef] = useState(clefs[0])

    console.log('clef = ',clefs[0].notes.length)

    return (
        <div className='editor-sheet-measure'>
            
            {clef.notes.map((note, index) => (
                <React.Fragment key={`clef-fragment-${index}`}>
                    {note.type === 'line' ?
                        <React.Fragment key={`clef-line-fragment-${index}`}>
                            {note.staff ?
                                <div className='editor-sheet-measure-line measure-line-space' key={`clef-line-${index}`}/>
                            :
                                <div className='editor-sheet-measure-line-ledger measure-line-space' key={`clef-line-ledger-${index}`}/>
                            }
                        </React.Fragment>
                    :
                        <React.Fragment key={`clef-space-fragment-${index}`}>
                            {note.staff ?
                                <div className='editor-sheet-measure-space measure-line-space' key={`clef-space-${index}`}/>
                            :
                                <div className='editor-sheet-measure-space-ledger measure-line-space' key={`clef-space-ledger-${index}`}/>
                            }
                        </React.Fragment>
                    }
                </React.Fragment>
            ))}
        </div>
    )
}