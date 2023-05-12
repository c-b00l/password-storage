import useMainContext from '../../useMainContext'
import PasswordPresenter from '../presenters/PasswordPresenter'

export default function usePasswordPresenter() {
    return PasswordPresenter(useMainContext())
}
