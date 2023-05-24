import useLocaleContext from '../../../../../useLocaleContext'
import TitlePresenter from '../presenter/TitlePresenter'

export default function useTitlePresenter() {
    return TitlePresenter(useLocaleContext())
}
