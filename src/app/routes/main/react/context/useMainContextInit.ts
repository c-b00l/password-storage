import { useState } from 'react'
import { MainContextModel } from './MainContext'

export default function useMainContextInit(): MainContextModel {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return { username, setPassword, password, setUsername }
}
