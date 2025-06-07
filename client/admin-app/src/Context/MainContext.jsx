import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export let loginContext = createContext()



export default function MainContext({ children }) {

    let [adminID, setAdminID] = useState(localStorage.getItem("ADMINID") ?? '')

    useEffect(() => {
        localStorage.setItem("ADMINID", adminID)
    }, [adminID])

    let obj = {
        adminID,
        setAdminID
    }
    return (
        <loginContext.Provider value={obj}>
            {children}
        </loginContext.Provider>
    )
}

