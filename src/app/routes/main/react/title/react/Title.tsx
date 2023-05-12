import { Typography } from '@mui/material'
import React from 'react'
import useTitlePresenter from './useTitlePresenter'
import styles from './Title.module.css'

export default function Title() {
    const { getTitle } = useTitlePresenter()

    return (
        <Typography variant="h3" className={styles.title}>
            {getTitle()}
        </Typography>
    )
}
