import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Set the serial number, status and reuse count of the core in a card
 * @param {object} props, one core object
 * @returns a card of one core with some information and a button for more details
 */
export default function CoreListItem(props) {
    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    Serial number: {props.core.serial}
                </div>
                <div className="description">
                    <p>Status: {props.core.status}</p>
                    <p>The core has been reused {props.core.reuse_count} times</p>
                </div>
            </div>
            <Link className="ui bottom attached button" to={`/cores/${props.core.id}`} >
                <i className="add icon" /> More details
            </Link>
        </div>
    )
}