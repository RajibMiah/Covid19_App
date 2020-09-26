import React from 'react';
import { Cards, Charts, CountryPicker } from './Components'
import Styles from './App.module.css'
import { fatchData } from "../src/Api"
class App extends React.Component {

  state = {
    data: {},
    country: "",
  }

  async componentDidMount() {
    const fatcheddata = await fatchData();
    this.setState({ data: fatcheddata })
  }

  handleCountryChange = async (country) => {
    const fatcheddata = await fatchData(country);
    this.setState({ data: fatcheddata, country: country })
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={Styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;