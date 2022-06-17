import { createContext, useContext, useState } from "react"

const mockUsers = [
    {email: 'mail@mail.com', pass: '123456789'},
]



export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        loggedIn: false,
        userId: null
    })


    const login = (values) => {
        const {email, password} = values

        const match = mockUsers.find((user) => user.email === email)

        if (match) {
            if (match.pass === password) {
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else {
                alert("Password incorrecto")
            }
        } else {
            alert("Usuario no encontrado")
        }

    }

    const logout = () => {
        setAuth({
            loggedIn: false,
            userId: null
        })
    }


    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}