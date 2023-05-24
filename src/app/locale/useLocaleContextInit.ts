// eslint-disable-next-line import/no-extraneous-dependencies
import { I18n } from 'i18n-js'
import { useMemo } from 'react'
import en from './translations/en'
import pl from './translations/pl'
import { LocaleContextModel } from './LocaleContext'

export default function useLocaleContextInit() {
    const i18n = useMemo(() => {
        const value = new I18n({ pl, en })

        value.enableFallback = true
        value.defaultLocale = 'en'
        value.locale = window.navigator.language

        return value
    }, [])

    return {
        translate: i18n.translate.bind(i18n),
        locale: i18n.locale,
    } as LocaleContextModel
}
