import React from "react";
import { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './CountryPicker.module.css';
import { fetchCountries } from "../../api";


const CountryPicker = ({handleCountryChange}) => {

   const [fetchedCountries, setFetchedCountries] = useState([]);

   useEffect( () => {
       const fetchAPI = async () => {
           setFetchedCountries( await fetchCountries());
       }
       fetchAPI();
   }, []);


    return ( 
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue = "" onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value = "">Global</option>
                {fetchedCountries.map( (item,i) => <option key = {i} value={item}>{item}</option>)}

            </NativeSelect>
        </FormControl>
     );
}
 
export default CountryPicker;