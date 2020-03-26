import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CoronaHome() {

    const [nepalInfectionData, setNepalInfectionData] = useState({});
    useEffect(() => {
        axios.get('https://nepalcorona.info/api/v1/data/nepal')
            .then(res => setNepalInfectionData(res.data))
            .catch(err => console.log(err));
    }, [])
    const [worldInfectionData, setWorldInfectionData] = useState({});
    useEffect(() => {
        axios.get('https://nepalcorona.info/api/v1/data/world?limit=100')
            .then(res => setWorldInfectionData(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="container">
            <h1 className="text-center display-4 text-danger">Corona Information</h1>
            <div className="m-4 p-4 border rounded">
                <h2 className="text-center">Nepal Infection Data</h2>
                <div>
                    <h5 className="d-inline">Positive Test</h5>
                    {nepalInfectionData.tested_positive}
                </div>
                <div>
                    <h5 className="d-inline">Negative Test</h5>
                    <div>{nepalInfectionData.tested_negative}</div>
                </div>
                <div>
                    <h5 className="d-inline">Total Test</h5>
                    <div>{nepalInfectionData.tested_total}</div>
                </div>
                <div>
                    <h6>Source: <a href={nepalInfectionData.source} target="_blank" rel="noopener noreferrer">{nepalInfectionData.source}</a></h6>
                </div>
            </div>


            <h2>World Infection Data</h2>
            <h6> sourced from <a href="https://www.worldometers.info/" target="_blank" rel="noopener noreferrer">worldmeters</a></h6>
            <div className="row">
                {
                    worldInfectionData.length
                    &&
                    worldInfectionData.map((country) => (
                        <div key={country._id} className="col-sm-6 col-lg-4 col-12">
                            <div className="bg-success text-light p-2 m-2 rounded">
                                <h4 className="text-center">{country.country}</h4>
                                <div>
                                    <h5 className="d-inline">Total Cases: </h5>
                                    {country.totalCases}
                                </div>
                                <div>
                                    <h5 className="d-inline">New Cases: </h5>
                                    {country.newCases}
                                </div>
                                <div>
                                    <h5 className="d-inline">Total Deaths: </h5>
                                    {country.totalDeaths}
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>


    )
}

export default CoronaHome;