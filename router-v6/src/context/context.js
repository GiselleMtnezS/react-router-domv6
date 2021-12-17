import React, { useState } from 'react'
export const UserContext = React.createContext()


export default function UserProvider(props) {

    const [mockToken, setMockToken] = useState(0)

    const toggleToken = () => {
        
        setMockToken(Math.random() * 10)

    }
    const toggleOff = () => {
        
        setMockToken(0)

    }

    return (
        <UserContext.Provider value={{ token: mockToken, toggleToken, toggleOff }}>
            { props.children}
        </UserContext.Provider>
    )
}