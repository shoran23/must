import React from 'react'

export default function Sheet(props) {
    return (
        <div className='editor-sheet-container' 
            style={{
                scale: `${props.scale}`
            }}
        >
            <div className='editor-sheet'>

            </div>
        </div> 
    )
}