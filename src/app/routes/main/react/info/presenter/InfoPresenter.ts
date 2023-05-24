import { LocaleContextModel } from '../../../../../type'

export default function InfoPresenter({ translate }: LocaleContextModel) {
    return {
        getInfo() {
            return translate(
                'Provide username and password to access password storage'
            )
        },
    }
}
