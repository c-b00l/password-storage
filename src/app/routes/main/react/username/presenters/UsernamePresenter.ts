import { LocaleContextModel } from '../../../../../type'
import { MainContextModel } from '../../context/MainContext'

export default function UsernamePresenter(
    { username, setUsername }: MainContextModel,
    { translate }: LocaleContextModel
) {
    return {
        getValue() {
            return username
        },
        getPlaceholder() {
            return translate('write username here')
        },
        getLabel() {
            return translate('username')
        },
        onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
            setUsername(e.target.value)
        },
    }
}
