import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props) {
    const [color, setColor] = useState('white')


    return (
        <button className='editor-button' 
            onPointerDown={() => {
                setColor('#18D0E8')
                props.button.function()
            }}
            onPointerUp={() => setColor('white')}
        >
            <FontAwesomeIcon icon={props.button.icon} color={color} fontSize={42}/>
        </button>
    )
}