import React, { createContext, useEffect, useState } from "react";

export const Context = createContext()
export function Provider({ children }) {

    const [width, setWidth] = useState(window.innerWidth)
    const [navMenu, setNavMenu] = useState(false)

    const handleResize = () => setWidth(window.innerWidth)
    const openNav = () => setNavMenu(!navMenu)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [width])

    return (
        <Context.Provider
            value={{
                width,
                navMenu,
                openNav
            }}>
            {children}
        </Context.Provider >
    )
}
