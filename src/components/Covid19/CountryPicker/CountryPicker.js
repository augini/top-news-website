import React, {useState,useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {FetchCountries} from '../../../api'
import styles from './CountryPicker.module.css'

export const CountryPicker = ({handleChange}) => {

  const[fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const FetchAPI = async () => {
      setFetchedCountries(await FetchCountries())
    }

    FetchAPI()
  }, [setFetchedCountries])

  return ( 
    <FormControl className = {styles.formControl}>
      <NativeSelect default = '' onChange = {(e) => handleChange(e.target.value)} >
        <option value = ''>Global</option>
        {fetchedCountries.map((country, i) => (
          <option key = {i} value = {country}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
