import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api';
// import Image from './covid-19.png';
// import Icon from './icon.jpg';


import {Cards, Chart, CountryPicker} from './components';

class App extends React.Component {

    state = {
        data: {},
    };
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData}); 
    }

    render() {

        return (
            <div className={styles.container}>
                {/* <img className = {styles.title} src = {Image} /> */}
                <Cards cardData = {this.state.data}/>
                {/* <img className= {styles.icon} src = {Icon} /> */}
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;