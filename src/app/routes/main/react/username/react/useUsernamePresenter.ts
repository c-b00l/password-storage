import useLocaleContext from '../../../../../useLocaleContext'
import useMainContext from '../../useMainContext'
import UsernamePresenter from '../presenters/UsernamePresenter'

export default function useUsernamePresenter() {
    return UsernamePresenter(useMainContext(), useLocaleContext())
}
