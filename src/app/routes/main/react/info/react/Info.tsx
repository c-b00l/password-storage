import { Typography } from '@mui/material'
import React from 'react'
import useInfoPresenter from './useInfoPresenter'
import styles from './Info.module.css'

export default function Info() {
    const { getInfo } = useInfoPresenter()

    return (
        <Typography variant="h5" className={styles.info}>
            {getInfo()}
        </Typography>
    )
}
