import React from 'react'
import { Card, Container } from '@mui/material'
import Title from './title/react/Title'
import Info from './info/react/Info'
import MainContext from './context/MainContext'
import useMainContextInit from './context/useMainContextInit'
import Username from './username/react/Username'
import styles from './Main.module.css'
import Password from './username copy/react/Password'

export default function Main() {
    const value = useMainContextInit()

    return (
        <MainContext.Provider value={value}>
            <Container className={styles.container}>
                <Card className={styles.main}>
                    <Title />
                    <Info />
                    <Username />
                    <Password />
                </Card>
            </Container>
        </MainContext.Provider>
    )
}
