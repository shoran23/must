import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TrebleWhite from '../../../images/clefs/Treble_clef.png'

export default function Button(props) {
    const [color, setColor] = useState('white')
    const [borderBottom, setBorderBottom] = useState('1px solid #707070')
    const [image, setImage] = useState()

    useEffect(() => {
        if(props.index === (props.length - 1)) {
            setBorderBottom('none')
        } else {
            setBorderBottom('1px solid #707070')
        }
        if(props.button.images !== null) {
            setImage(props.button.images.inactive)
        }
    },[])

    return (
        <button className='editor-button' 
            style={{
                borderBottom: borderBottom
            }}
            onPointerDown={() => {
                setColor('#18D0E8')
                if(props.button.images !== null) {
                    console.log('button with images pressed')
                    setImage(props.button.images.active)
                }
                //props.button.function()
  
            }}
            onPointerUp={() => {
                setColor('white')
                if(props.button.images !== null) {
                    setImage(props.button.images.inactive)
                }
            }}
        >
            {props.button.icon !== null ?
                <FontAwesomeIcon icon={props.button.icon} color={color} fontSize={42}/>
            :
                <img src={image} className='editor-button-image'/>
            }
        </button>
    )
}