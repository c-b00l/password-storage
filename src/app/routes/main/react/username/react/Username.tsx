import { TextField } from '@mui/material'
import React from 'react'
import useUsernamePresenter from './useUsernamePresenter'

export default function Username() {
    const { getLabel, getPlaceholder, getValue, onChange } =
        useUsernamePresenter()

    return (
        <TextField
            onChange={onChange}
            label={getLabel()}
            value={getValue()}
            placeholder={getPlaceholder()}
        />
    )
}
