import React from 'react'

export default function WhiteKey(props) {
    return (
        <button
            className='key-white'
            onPointerDown={() => {
                props.instrument.triggerAttack(props.note)
            }}
            onPointerUp={() => {
                props.instrument.triggerRelease('+0.1')
            }}
            onPointerLeave={() => {
                props.instrument.triggerRelease('+0.1')
            }}
        />
    )
}