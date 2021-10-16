// Packages
import { useContext } from "react"

// Context
import { AuthContext } from "../contexts/AuthContext"

export const useAuth = () => {
    const value = useContext(AuthContext)

    return value
}