import React from 'react';
import ImageLandscape from '../img/landscape.jpg';

/**
 * Home page of the application
 * @returns general information about the appliction
 */
export default function Home() {
    return (
        <div className="ui center aligned segment">
            <h1>SpaceX cores analyse</h1>
            <p>This website was made for education purposes, and has no affiliation with
                <a href="https://www.spacex.com/" rel="noopener noreferrer" target="_blank"> SpaceX</a>.
            </p>
            <p>Made with
                <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"> React</a>,
                <a href="https://semantic-ui.com/" rel="noopener noreferrer" target="_blank"> Semantic-ui</a> and
                <a href="https://github.com/r-spacex/SpaceX-API" rel="noopener noreferrer" target="_blank"> SpaceX-API</a>
            </p>
            <img className="ui centered image" src={ImageLandscape} alt="Core on droneship" />
        </div>
    )
}