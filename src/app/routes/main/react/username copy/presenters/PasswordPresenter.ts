import { MainContextModel } from '../../context/MainContext'

export default function PasswordPresenter({
    password,
    setPassword,
}: MainContextModel) {
    return {
        getValue() {
            return password
        },
        getPlaceholder() {
            return 'write password here'
        },
        getLabel() {
            return 'password'
        },
        onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
            setPassword(e.target.value)
        },
    }
}
