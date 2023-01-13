import { makeAutoObservable } from 'mobx';


interface ISideButton {
    text: string;
    callback: () => void;
}


class ButtonsViewModel {

    value: string = ''

    setValue(v: string) {
        this.value = v
    }

    constructor(public leftButtons: ISideButton[] = [], public rightButtons: ISideButton[] = []) {
        makeAutoObservable(this)
    }
}

export default ButtonsViewModel;