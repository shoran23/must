import React from 'react'

export default function GuitarNote(props) {
    return (
        <button 
            className='guitar-note' 
            style={{marginLeft: props.marginLeft}} 
            onPointerDown={() => props.instrument.triggerAttack(props.note)}
            onPointerUp={() => props.instrument.triggerRelease('+0.1')}
            onPointerLeave={() => props.instrument.triggerRelease('+0.1')}
        />
    )
}