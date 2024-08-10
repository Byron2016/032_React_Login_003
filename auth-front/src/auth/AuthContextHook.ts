import { useContext } from 'react'
import { AuthContext } from './AuthContext'

/* Hook que nos permite acceder a las funciones de    nuestro useContext.*/
export const useAuth = () => useContext(AuthContext)
