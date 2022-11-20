import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Rests() {
    const controls = useDragControls()

    const buttons = [
        {label: 'Whole Rest', icon: null, id: useId(), images: {inactive: require('../../../images/rests/semibreve/Rest_Semibreve_White.png').default, active: require('../../../images/rests/semibreve/Rest_Semibreve_Blue.png').default}},
        {label: '1/2 Rest', icon: null, id: useId(), images: {inactive: require('../../../images/rests/crotchet/Rest_Crotchet_White.png').default, active: require('../../../images/rests/crotchet/Rest_Crotchet_Blue.png').default}},
        {label: '1/4 Rest', icon: null, id: useId(), images: {inactive: require('../../../images/rests/minim/Rest_Minim_White.png').default}, active: require('../../../images/rests/minim/Rest_Minim_Blue.png').default},
        {label: '1/8 Rest', icon: null, id: useId(), images: {inactive: require('../../../images/rests/quaver/Rest_Quaver_White.png').default}, active: require('../../../images/rests/quaver/Rest_Quaver_Blue.png').default},
        {label: '1/16 Rest', icon: null, id: useId(), images: {inactive: require('../../../images/rests/semiquaver/Rest_Semiquaver_White.png').default, active: require('../../../images/rests/semiquaver/Rest_Semiquaver_Blue.png').default}}
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-rests'
            drag
            dragControls={controls}
        >
            <div className='editor-list-header'>
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={18} />
                <FontAwesomeIcon icon={faHome} color='#707070' fontSize={18}/>
            </div>
            {buttons.map((button,index) => (
                <Button
                    key={button.id}
                    index={index}
                    button={button}
                    length={buttons.length}
                />
            ))}
        </motion.div>
    )
}
