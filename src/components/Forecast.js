import React from 'react';

const Forecast = (props) => {
    const forecast = props.forecast.map(({name, detailedForecast}) => {
        return (
            <div>
                <h5>{ name }</h5>
                <p>{ detailedForecast }</p>
            </div>
        );
    });

    return (
        <div>{ forecast }</div>
    );
};

export default Forecast;