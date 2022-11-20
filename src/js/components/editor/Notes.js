import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Notes() {
    const controls = useDragControls()


    const buttons = [
        {label: 'Whole Note', icon: null, id: useId(), images: {inactive: require('../../../images/notes/semibreve/Semibreve_White.png').default, active: require('../../../images/notes/semibreve/Semibreve_Blue.png').default}},
        {label: '1/2 Note', icon: null, id: useId(), images: {inactive: require('../../../images/notes/crotchet/Crotchet_White.png').default, active: require('../../../images/notes/crotchet/Crotchet_Blue.png').default}},
        {label: '1/4 Note', icon: null, id: useId(), images: {inactive: require('../../../images/notes/minim/Minim_White.png').default, active: require('../../../images/notes/minim/Minim_Blue.png').default}},
        {label: '1/8 Note', icon: null, id: useId(), images: {inactive: require('../../../images/notes/quaver/Quaver_Single_White.png').default, active: require('../../../images/notes/quaver/Quaver_Single_Blue.png').default}},
        {label: '1/16 Note', icon: null, id: useId(), images: {inactive: require('../../../images/notes/semiquaver/Semiquavers_Joined_White.png').default, active: require('../../../images/notes/semiquaver/Semiquavers_Joined_Blue.png').default}}
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-notes'
            drag
            dragControls={controls}
        >
            <div className='editor-list-header'>
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={24}/>
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