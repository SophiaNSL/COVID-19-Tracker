import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api';
import Covid from './images/covid-19.png';
// import Icon from './icon.jpg';


import {Cards, Chart, CountryPicker} from './components';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    };
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData}); 
    }

    handleCountryChange = async (country) => {
        
        const fetchedData = await fetchData(country);

        this.setState({
            data: fetchedData,
            country: country
        });

    }

    render() {

        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img src = {Covid} className = {styles.image} alt = "COVID-19"/>
                <Cards data={data}/>
                {/* <Cards cardData = {this.state.data}/> */}
                {/* <img className= {styles.icon} src = {Icon} /> */}
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data = {data} country = {country}/>
            </div>
        )
    }
}

export default App;