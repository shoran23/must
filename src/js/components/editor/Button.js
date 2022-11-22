import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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


    useEffect(() => {
        if(props.context !== null) {
            if(props.button.active !== null) {
                if(props.context[props.button.active.state] === props.button.active.value) {
                    setColor('#18D0E8')
                } else {
                    setColor('white')
                }
            }
        }
    },[props.context])

    return (
        <button className='editor-button' 
            style={{
                borderBottom: borderBottom
            }}
            onClick={props.button.press}
        >
            {props.button.icon !== null ?
                <FontAwesomeIcon icon={props.button.icon} color={color} fontSize={42}/>
            :
                <img src={image} className='editor-button-image'/>
            }
        </button>
    )
}