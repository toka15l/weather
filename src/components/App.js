import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import StateStationCard from "./StateStationCard";
import Observation from "./Observation";
import Jumbotron from "./Jumbotron";
import weather from "../api/weather";
import Forecast from "./Forecast";

class App extends React.Component {
    state = { observation: null, forecast: null };

    getStationObservations = async (stationIdentifier) => {
        const response = await weather.get('/stations/' + stationIdentifier + '/observations/latest');
        this.setState({ observation: response.data.properties });
    }

    getStationForecastEndpoint = async (stationIdentifier) => {
        const response = await weather.get('/stations/' + stationIdentifier);
        this.getStationForecast(response.data.properties.forecast + '/forecast');
    }

    getStationForecast = async (stationForecastEndpoint) => {
        const response = await weather.get(stationForecastEndpoint);
        this.setState({ forecast: response.data.periods });
    }

    onStationSelected = (stationIdentifier) => {
        this.getStationObservations(stationIdentifier);
        this.getStationForecastEndpoint(stationIdentifier);
    };

    render() {
        return (
            <div>
                <Jumbotron title="React Weather" icon={ <FontAwesomeIcon icon={ faCloud }/> }>
                    A basic local weather app built using <a href="https://reactjs.org/">React</a> and <a href="https://getbootstrap.com/">Bootstrap</a><br/>
                    Built by <a href="https://github.com/toka15l">Steven Lawson</a> with <a href="https://www.weather.gov/documentation/services-web-api">data</a> provided by <a href="https://www.weather.gov/">weather.gov</a>
                </Jumbotron>
                <div className="container" style={{ marginTop: 20 }}>
                    <StateStationCard onStationSelected={ this.onStationSelected } />
                    { this.state.observation ? <Observation observation={ this.state.observation } /> : '' }
                    { this.state.forecast ? <Forecast forecast={ this.state.forecast } /> : ''}
                </div>
            </div>
        );
    }
};

export default App;