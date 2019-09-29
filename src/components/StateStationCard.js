import React from 'react';
import weather from "../api/weather";
import StateSelector from "./StateSelector";
import StationSelector from "./StationSelector";
import './ObservationSelector.css'

class StateStationCard extends React.Component {
    state = { selectedState: null, selectedStation: null, stations: [] };

    onStateSelected = async ({ abbreviation, name}) => {
        const response = await weather.get('/stations', {
            params: {
                state: abbreviation
            }
        });
        this.setState({ selectedState: name, stations: response.data.features });
    };

    onStationSelected = ({ stationIdentifier, name }) => {
        this.setState({ selectedStation: name });
        this.props.onStationSelected(stationIdentifier);
    };

    resetState = () => {
        this.setState({ selectedState: null, selectedStation: null });
        this.props.onStationSelected(null);
    }

    resetStation = () => {
        this.setState({ selectedStation: null });
        this.props.onStationSelected(null);
    }

    renderBreadcrumbs() {
        if (this.state.selectedState && this.state.selectedStation) {
            return (
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#" onClick={ this.resetState }>{ this.state.selectedState }</a></li>
                        <li className="breadcrumb-item"><a href="#" onClick={ this.resetStation }>{ this.state.selectedStation }</a></li>
                    </ol>
                </nav>
            );
        }
    }

    renderSelectors() {
        return (
            <div className="card observation-selector">
                <div className="card-body">
                    <StateSelector selectedState={ this.state.selectedState } onStateSelected={ this.onStateSelected }/>
                    { this.state.selectedState ? <StationSelector selectedStation={ this.state.selectedStation } stations={ this.state.stations } onStationSelected={ this.onStationSelected } /> : '' }
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                { this.state.selectedState && this.state.selectedStation ? this.renderBreadcrumbs() : this.renderSelectors() }
            </div>
        );
    }
};

export default StateStationCard;