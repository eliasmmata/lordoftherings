import React from "react";

import { useEffect, useState } from "react";

const Effect = () => {

    const [state, setState] = useState(false)

    useEffect(() => {
        console.log('renderizando')
        printtext(String(state))
        document.title= `Estado :${state}`
    },[state])

    const printtext = (text) => {
        console.log(text)
    }

    return(
        <>
        <p>Use effect funcionando</p>
        <button onClick={() =>setState(!state)} style={{marginTop:`0.5rem`,padding: `0.5rem`,width: `20%`,border: `1px solid white`,background: `rgb(253, 240, 213)`,color: `rgb(51, 24, 50)`}}> cambiar estado</button>
        </>
    )
}

export default Effect