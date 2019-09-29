import React from 'react';

const Observation = ({ observation }) => {
    const degreesC = Math.round(observation.temperature.value);
    const degreesF = Math.round((observation.temperature.value * 9/5) + 32);

    return (
        <div>
            <img className="rounded " src={ observation.icon } alt={ observation.textDescription } />
            <h1>{ observation.textDescription }</h1>
            <p>{ degreesF }&deg;F / { degreesC }&deg;C</p>
        </div>
    );
};

export default Observation;