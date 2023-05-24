import en from './en'
import pl from './pl'

export type LocaleKeys = keyof typeof en

export type ReturnLocaleType<TKey extends LocaleKeys> = NonNullable<
    (typeof en)[TKey] | (typeof pl)[TKey]
>
