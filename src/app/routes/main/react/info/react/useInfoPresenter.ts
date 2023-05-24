import useLocaleContext from '../../../../../useLocaleContext'
import InfoPresenter from '../presenter/InfoPresenter'

export default function useInfoPresenter() {
    return InfoPresenter(useLocaleContext())
}
