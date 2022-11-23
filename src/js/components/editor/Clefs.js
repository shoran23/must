import React, { useId, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars, 
    faHome,
    faArrowUp,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Clefs(props) {
    const controls = useDragControls()
    const [extendDown, setExtendDown] = useState(false)

    const buttons = [
        {
            label: 'Treble', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/clefs/Treble_White.png').default, 
                active: require('../../../images/clefs/Treble_Blue.png').default
            },
            press: null,
            pressValue: null,
            active: null
        },
        {
            label: 'Tenor', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/clefs/Tenor_White.png').default, 
                active: require('../../../images/clefs/Tenor_Blue.png').default
            },
            press: null,
            pressValue: null,
            active: null
        },
        {
            label: 'Bass', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/clefs/Bass_White.png').default, 
                active: require('../../../images/clefs/Bass_Blue.png').default
            },
            press: null, 
            pressValue: null,
            active: null,
        },
        {
            label: 'Alto', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/clefs/Alto_White.png').default, 
                active: require('../../../images/clefs/Alto_Blue.png').default
            },
            press: null,
            pressValue: null,
            active: null,
        }
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-clefs'
            drag
            dragControls={controls}
            style={{
                zIndex: props.menuZIndexes[props.menuIndex]
            }}
            onPointerDown={() => props.updateMenuZIndexes(props.menuIndex)}
        >
            <div className='editor-list-header'> 
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={18}/>
                <FontAwesomeIcon icon={faHome} color='#707070' fontSize={18}/>
                {extendDown ?
                    <FontAwesomeIcon icon={faArrowUp} color='#707070' fontSize={18} onClick={() => setExtendDown(false)}/>
                :
                    <FontAwesomeIcon icon={faArrowDown} color='#707070' fontSize={18} onClick={() => setExtendDown(true)}/>                    
                }
            </div>
            {extendDown ? 
                <React.Fragment>
                    {buttons.map((button,index) => (
                        <Button
                            key={button.id}
                            index={index}
                            button={button}
                            length={buttons.length}
                            context={null}
                        />
                    ))}
                </React.Fragment>            
            :
                <p className='editor-list-label'>Clefs</p>
            }
        </motion.div>
    )
}