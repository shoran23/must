import { useLayoutEffect, useState } from 'react'

export default function useSetDragContraints() {
    const [top, setTop] = useState()
    const [left, setLeft] = useState()
  
    useLayoutEffect(() => {
        let body = document.getElementById("editor-body")
        setTop(body.offsetTop)
        setLeft(body.offsetLeft)

    },[])
    
    return [top, left]
}