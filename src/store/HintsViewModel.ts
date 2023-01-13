import { makeAutoObservable } from 'mobx';
import { CountryInfo, getCountryByName } from '../api/apiService';



class HintsViewModel {

    countries: Array<CountryInfo> = []

    value: string = ''

    async loadHints(term: string) {
        this.value = term
        this.countries = (await getCountryByName(term)).slice(0, this.hintCount)
    }

    onHintClick(fullName: string) {
        this.value = fullName
        this.countries = this.countries.filter(country => country.fullName === fullName)
    }

    constructor(public hintCount: number) {
        makeAutoObservable(this)
    }
}

export default HintsViewModel;