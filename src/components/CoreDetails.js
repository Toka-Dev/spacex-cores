import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ImageSingleCore from '../img/singleCore.png';
import useSpaceXApi from './SpaceXApi';
import LoadingSpinner from './LoadingSpinner';

/**
 * Detail view of a core
 * Used the SpaceXApi to get one special core
 * @returns detailed information about one core or the component LoadingSpinner
 */
export default function CoreDetails() {

    const core = useSpaceXApi('get', `cores/${useParams().id}`);

    //Set Guard: Use const core and return CoreDetails only if SpaceXApi had send the response
    if (!core) {
        return <LoadingSpinner name='core' />
    }

    return (
        <>
            <h1>Detail view of a core</h1>
            <div className="ui card">
                <div className="image">
                    <img src={ImageSingleCore} alt="Core landing" />
                </div>
                <div className="content">
                    <div className="header">
                        Serial number: {core.serial}
                    </div>
                    <div className="meta">
                        <span className="cinema">Id: {core.id}</span><br />
                        <span className="cinema">Status: {core.status}</span><br />
                        <span className="cinema">The core has been reused {core.reuse_count} times</span>
                    </div>
                    <div className="description">
                        <h4>Return To Launch Site landings (RTLS)</h4>
                        <ul className="ui list">
                            <li>attempted: {core.asds_attempts}</li>
                            <li>successful: {core.asds_landings}</li>
                        </ul>
                        <h4>Autonomous Spaceport Drone Ship landings (ASDS)</h4>
                        <ul className="ui list">
                            <li>attempted: {core.rtls_attempts}</li>
                            <li>successful: {core.rtls_landings}</li>
                        </ul>
                        <h4>Last update:</h4>
                        <p>{core.last_update}</p>
                        <h4>List of Launches:</h4>
                        <ul className="ui list">
                            {
                                core.launches.map(launch => <li key={launch}>{launch}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <Link className="ui bottom attached button" to={`/cores`} >
                    <i className="left chevron icon" />Back to the list
                </Link>
            </div>
        </>
    )
}
