import React from 'react';
import './Jumbotron.css'

const Jumbotron = ({ title, children, icon }) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container d-flex align-items-center">
                <div>
                    <h1 className="display-4">{ title }</h1>
                    <p className="lead">
                        { children }
                    </p>
                </div>
                <div className="icon fa-6x ml-auto">{ icon }</div>
            </div>
        </div>
    );
};

export default Jumbotron;