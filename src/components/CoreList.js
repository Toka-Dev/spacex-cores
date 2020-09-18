import React from 'react';
import useSpaceXApi from './SpaceXApi';
import LoadingSpinner from './LoadingSpinner';
import OutputCoreList from './OutputCoreList';

/**
 * Used the SpaceXApi to get an array of all cores
 * @returns the component OutputCoreList or the component LoadingSpinner
 */
export default function CoreList() {

    const cores = useSpaceXApi('get', 'cores');

    //Set Guard: Send cores data to OutputCoreList if SpaceXApi had send the response
    if (!cores) {
        return <LoadingSpinner name='cores' />
    }

    return (
        <OutputCoreList cores={cores} />
    )
}