import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import Style from './CountryPicker.module.css'
import { fetchCountries } from '../../Api'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountry, setFetchedCountry] = useState([])

    useEffect(() => {
        const fetchCountriesApi = async () => {
            setFetchedCountry(await fetchCountries())
        }
        fetchCountriesApi();
    }, [setFetchedCountry])
    
    return (
        <FormControl className={Style.formControl}>
            <NativeSelect defaultValue = "" onChange = {(e)=>handleCountryChange(e.target.value)}>
                <option value='global'> Global</option>
                {
                    fetchedCountry.map((country, i) =>
                        <option key={i} value={country} > {country} </option>
                    )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;