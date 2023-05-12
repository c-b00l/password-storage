import { MainContextModel } from '../../context/MainContext'

export default function UsernamePresenter({
    username,
    setUsername,
}: MainContextModel) {
    return {
        getValue() {
            return username
        },
        getPlaceholder() {
            return 'write username here'
        },
        getLabel() {
            return 'username'
        },
        onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
            setUsername(e.target.value)
        },
    }
}
