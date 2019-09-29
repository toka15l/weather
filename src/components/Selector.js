import React from 'react';
import './Selector.css';

const Selector = (props) => {
    const onSelected = (e) => {
        props.onSelected(e.target.value);
    };

    return (
        <div className="card selector">
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <select defaultValue={ props.defaultValue } onChange={ onSelected }>
                    { props.children }
                </select>
            </div>
        </div>
    );
};

export default Selector;