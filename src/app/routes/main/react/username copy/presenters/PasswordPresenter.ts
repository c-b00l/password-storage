import { LocaleContextModel } from '../../../../../type'
import { MainContextModel } from '../../context/MainContext'

export default function PasswordPresenter(
    { password, setPassword }: MainContextModel,
    { translate }: LocaleContextModel
) {
    return {
        getValue() {
            return password
        },
        getPlaceholder() {
            return translate('write password here')
        },
        getLabel() {
            return translate('password')
        },
        onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
            setPassword(e.target.value)
        },
    }
}
