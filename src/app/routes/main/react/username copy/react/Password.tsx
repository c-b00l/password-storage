import { TextField } from '@mui/material'
import React from 'react'
import usePasswordPresenter from './usePasswordPresenter'

export default function Password() {
    const { getLabel, getPlaceholder, getValue, onChange } =
        usePasswordPresenter()

    return (
        <TextField
            onChange={onChange}
            label={getLabel()}
            value={getValue()}
            placeholder={getPlaceholder()}
            type="password"
            autoComplete="password"
        />
    )
}
