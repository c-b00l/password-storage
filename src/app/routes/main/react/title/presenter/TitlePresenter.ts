import { LocaleContextModel } from '../../../../../type'

export default function TitlePresenter({ translate }: LocaleContextModel) {
    return {
        getTitle() {
            return translate('Password storage')
        },
    }
}
