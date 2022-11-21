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

export default function Notes() {
    const controls = useDragControls()
    const [extendDown, setExtendDown] = useState(false)

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
                        />
                    ))}
                </React.Fragment>
            :
                <p className='editor-list-label'>Notes</p>
            }


        </motion.div>
    )
}