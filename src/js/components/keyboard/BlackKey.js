import React from 'react'

export default function BlackKey(props) {
    return (
        <button
            className='key-black'
            onPointerDown={() => {
                props.instrument.triggerAttack(props.note)
            }}
            onPointerUp={() => {
                props.instrument.triggerRelease('+0.25')
            }}
            onPointerLeave={() => {
                props.instrument.triggerRelease('+0.25')
            }}
        />
    )
}