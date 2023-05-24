// eslint-disable-next-line import/no-unresolved
import { TranslateOptions } from 'i18n-js/typings'
import { createContext } from 'react'
import { LocaleKeys, ReturnLocaleType } from './translations/type'

export interface LocaleContextModel {
    locale: string
    translate: <TKey extends LocaleKeys>(
        key: TKey,
        options?: TranslateOptions
    ) => ReturnLocaleType<TKey>
}

const LocaleContext = createContext<null | LocaleContextModel>(null)

export default LocaleContext
