import { createContext } from 'react'

export interface MainContextModel {
    password: string
    setPassword: (value: string) => void
    username: string
    setUsername: (value: string) => void
}

const MainContext = createContext<MainContextModel | null>(null)

export default MainContext
