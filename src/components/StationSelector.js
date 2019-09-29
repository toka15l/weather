import React from 'react';
import Selector from "./Selector";

const StationSelector = (props) => {
    const onStationSelected = (stationIdentifier) => {
        const station = props.stations.find(station => {
            return station.properties.stationIdentifier === stationIdentifier;
        });
        props.onStationSelected(station.properties);
    };

    const stations = props.stations.map((station) => {
        return <option key={ station.properties.stationIdentifier } value={ station.properties.stationIdentifier }>{ station.properties.name }</option>;
    });

    const selectedStationFromIdentifier = props.stations.find(station => {
        return station.properties.name === props.selectedStation;
    });

    return (
        <Selector title="Select Station" defaultValue={ selectedStationFromIdentifier ? selectedStationFromIdentifier.properties.stationIdentifier : '' } onSelected={ onStationSelected }>
            { selectedStationFromIdentifier ? '' : <option>Select Station</option>}
            { stations }
        </Selector>
    );
};

export default StationSelector;