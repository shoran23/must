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

export default function Rests(props) {
    const controls = useDragControls()
    const [extendDown, setExtendDown] = useState(false)

    const buttons = [
        {
            label: 'Whole Rest', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/rests/semibreve/Rest_Semibreve_White.png').default, 
                active: require('../../../images/rests/semibreve/Rest_Semibreve_Blue.png').default
            },
            press: null,
            pressValue: null,
            active: null
        },
        {
            label: '1/2 Rest', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/rests/crotchet/Rest_Crotchet_White.png').default, 
                active: require('../../../images/rests/crotchet/Rest_Crotchet_Blue.png').default
            },
            press: null,
            pressValue: null,
            active: null
        },
        {
            label: '1/4 Rest', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/rests/minim/Rest_Minim_White.png').default, 
                active: require('../../../images/rests/minim/Rest_Minim_Blue.png').default
            },
            press: null,
            pressValue: null,
            active: null
        },
        {
            label: '1/8 Rest', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/rests/quaver/Rest_Quaver_White.png').default, 
                active: require('../../../images/rests/quaver/Rest_Quaver_Blue.png').default
            },
            press: null,
            pressValue: null,
            active: null
        },
        {
            label: '1/16 Rest', 
            icon: null, 
            id: useId(), 
            images: {
                inactive: require('../../../images/rests/semiquaver/Rest_Semiquaver_White.png').default, 
                active: require('../../../images/rests/semiquaver/Rest_Semiquaver_Blue.png').default
            },
            press: null,
            pressValue: null,
            active: null
        },
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-rests'
            drag
            dragControls={controls}
            style={{
                zIndex: props.menuZIndexes[props.menuIndex]
            }}
            onPointerDown={() => props.updateMenuZIndexes(props.menuIndex)}
        >
            <div className='editor-list-header'>
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={18} />
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
                <p className='editor-list-label'>Rests</p>
            }
        </motion.div>
    )
}
