import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TrebleWhite from '../../../images/clefs/Treble_clef.png'

export default function Button(props) {
    const [color, setColor] = useState('white')
    const [borderBottom, setBorderBottom] = useState('1px solid #707070')

    useEffect(() => {
        if(props.index === (props.length - 1)) {
            setBorderBottom('none')
        } else {
            setBorderBottom('1px solid #707070')
        }
    },[])

    return (
        <button className='editor-button' 
            style={{
                borderBottom: borderBottom
            }}
            onPointerDown={() => {
                setColor('#18D0E8')
                props.button.function()
            }}
            onPointerUp={() => setColor('white')}
        >
            {props.button.icon !== null ?
                <FontAwesomeIcon icon={props.button.icon} color={color} fontSize={42}/>
            :
                //<img src={'https://source.unsplash.com/user/c_v_r/100x100'} alt='Treble' width="100" height="100"/>
                <img src={TrebleWhite} width='100' height='300'/>
            }
        </button>
    )
}