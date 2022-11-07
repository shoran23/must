import React, { useEffect, useState, useMemo } from 'react'

import GuitarNote from './GuitarNote' 

import { octave } from '../../constants/notes'

export default function GuitarString(props) {
    const [notes, setNotes] = useState([])

    const determineStringNotes = () => {
        let localNotes = []
        let startingNoteIndex = null
        for(const [index, note] of octave.entries()) {      // should be using useMemo
            if(props.startingNote === note) {
                startingNoteIndex = index
            } 
            if(startingNoteIndex !== null && index >= startingNoteIndex) {
                localNotes.push(`${note}${props.startingOctave}`)
            }
        }
        if(localNotes.length < 20) {
            let additionalNoteCount = 20 - localNotes.length
            for(let octaveIndex=0; octaveIndex<additionalNoteCount; octaveIndex++) {
                localNotes.push(`${octave[octaveIndex]}${props.startingOctave + 1}`)
            }
        }
        setNotes(localNotes)
    }

    useEffect(() => {
        determineStringNotes()
    },[])

    const returnMargin = index => {
        if(index > 0) {
            if(index < 4) {
                return '4.35%'
            } else if(index < 8) {
                return '3.85%'
            } else if(index < 11) {
                return '3.56%'
            } else if(index < 12) {
                return '3.5%'
            } else if(index < 16) {
                return '3.15%'
            } else {
                return '2.9%'
            }
        } else {
           return '4.95%'
        }
    }
  
    return (
        <div className={`guitar-string shadow-component ${props.heightClassName}`}>
            {notes.map((note,index) => (
                <GuitarNote 
                    key={`guitar-note-${index}`} 
                    marginLeft={returnMargin(index)} 
                    note={note} 
                    index={index}
                    instrument={props.instrument}
                />
            ))}
        </div>
    )
}