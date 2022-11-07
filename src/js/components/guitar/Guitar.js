import React from 'react'
import { Synth } from 'tone'

import GuitarString from './GuitarString'

export default function Guitar() {

    const instrument = new Synth().toDestination()

    return (
        <div className='guitar'>
            <div className='guitar-fretboard-binding'/>
            <div className='guitar-fretboard'>
                <div className='guitar-fretboard-nut'>
                    <div className='guitar-fretboard-nut-string-groove' />
                    <div className='guitar-fretboard-nut-string-groove' />
                    <div className='guitar-fretboard-nut-string-groove' />
                    <div className='guitar-fretboard-nut-string-groove' />
                    <div className='guitar-fretboard-nut-string-groove' />
                    <div className='guitar-fretboard-nut-string-groove' />
                </div>
                <div className='guitar-fret left-margin-5'/>
                <div className='guitar-fret left-margin-5'/>
                <div className='guitar-fretboard-dot-container width-5'>
                    <div className='guitar-fretboard-dot'/>
                </div>
                <div className='guitar-fret'/>
                <div className='guitar-fret left-margin-5'/>
                <div className='guitar-fretboard-dot-container width-4-5'>
                    <div className='guitar-fretboard-dot'/>
                </div>
                <div className='guitar-fret'/>
                <div className='guitar-fret left-margin-4-5'/>
                <div className='guitar-fretboard-dot-container width-4-5'>
                    <div className='guitar-fretboard-dot'/>
                </div>
                <div className='guitar-fret'/>
                <div className='guitar-fret left-margin-4-5'/>
                <div className='guitar-fretboard-dot-container width-4-2'>
                    <div className='guitar-fretboard-dot'/>
                </div>
                <div className='guitar-fret'/>
                <div className='guitar-fret left-margin-4-2'/>
                <div className='guitar-fret left-margin-4-2'/>
                <div className='guitar-fretboard-dot-container width-4-2'>
                    <div className='guitar-fretboard-dot'/>
                    <div className='guitar-fretboard-dot'/>
                </div>
                <div className='guitar-fret'/>
                <div className='guitar-fret left-margin-3-8'/>
                <div className='guitar-fret left-margin-3-8'/>  
                <div className='guitar-fretboard-dot-container width-3-8'>
                    <div className='guitar-fretboard-dot'/>
                </div>     
                <div className='guitar-fret'/>
                <div className='guitar-fret left-margin-3-8'/>
                <div className='guitar-fretboard-dot-container width-3-6'>
                    <div className='guitar-fretboard-dot'/>
                </div>
                <div className='guitar-fret'/>
                <div className='guitar-fret left-margin-3-6'/>
                <div className='guitar-fretboard-dot-container width-3-6'>
                    <div className='guitar-fretboard-dot'/>
                </div>
                <div className='guitar-fret'/>
                <div className='guitar-fret left-margin-3-6'/>
            </div>
            <div className='guitar-fretboard-binding'/>
            <div className='guitar-string-container'>
                <GuitarString
                    startingNote='E'
                    startingOctave={4}
                    heightClassName='height-2-3'
                    instrument={instrument}
                />
                <GuitarString
                    startingNote='B'
                    startingOctave={3}
                    heightClassName='height-2-3'
                    instrument={instrument}
                />
                <GuitarString
                    startingNote='G'
                    startingOctave={3}
                    heightClassName='height-2-3'
                    instrument={instrument}
                />
                <GuitarString
                    startingNote='D'
                    startingOctave={3}
                    heightClassName='height-2-3'
                    instrument={instrument}
                />
                <GuitarString 
                    startingNote='A'
                    startingOctave={2}
                    heightClassName='height-2-3'
                    instrument={instrument}

                />
                <GuitarString
                    startingNote='E'
                    startingOctave={2}
                    heightClassName='height-2-3'
                    instrument={instrument}
                />
            </div>          
        </div>
    )
}