import React from 'react';
import { UsaStates } from 'usa-states';
import Selector from "./Selector";

const StateSelector = (props) => {
    const onStateSelected = (stateAbbreviation) => {
        const state = usaStates.states.find(state => {
            return state.abbreviation === stateAbbreviation;
        });
        props.onStateSelected(state);
    };

    const usaStates = new UsaStates({
        includeTerritories: false
    });

    const states = usaStates.states.map(({ abbreviation, name }) => {
        return <option key={ abbreviation } value={ abbreviation }>{ name }</option>;
    });

    const selectedStateFromName = usaStates.states.find(state => {
        return state.name === props.selectedState;
    });

    return (
        <Selector title="Select State" defaultValue={ selectedStateFromName ? selectedStateFromName.abbreviation : '' }  onSelected={ onStateSelected }>
            { selectedStateFromName ? '' : <option>Select State</option>}
            { states }
        </Selector>
    );
};

export default StateSelector;