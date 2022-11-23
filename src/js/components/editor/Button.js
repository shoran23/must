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
                    if(props.button.icon !== null) {
                        setColor('#18D0E8')
                    }
                    if(props.button.images !== null) {
                        setImage(props.button.images.active)
                    }

                } else {
                    if(props.button.icon !== null) {
                        setColor('white')
                    }
                    if(props.button.images !== null) {
                        setImage(props.button.images.inactive)
                    }
                }
            }
        }
    },[props.context])

    return (
        <button className='editor-button' 
            style={{
                borderBottom: borderBottom
            }}
            onClick={() => {
                if(props.button.pressValue === null){
                    props.button.press()
                } else {
                    props.button.press(props.button.pressValue)
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