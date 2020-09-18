import React from 'react'
import useSpaceXApi from './SpaceXApi';
import LoadingSpinner from './LoadingSpinner';

/**
 * Used the SpaceXApi to get an array of all cores
 * @returns statistical data about all cores or the component LoadingSpinner
 */
export default function StatisticalData() {

    const cores = useSpaceXApi('get', 'cores');

    //Set Guard: Use const cores and return StatisticalData only if SpaceXApi had send the response
    if (!cores) {
        return <LoadingSpinner name='cores' />;
    }

    const statisticalDataObject = cores.reduce(function (acc, core) {
        acc.totalLaunches += core.launches.length;
        acc.totalAsdsAttempts += core.asds_attempts;
        acc.totalAsdsLandings += core.asds_landings;
        acc.totalRtlsAttempts += core.rtls_attempts;
        acc.totalRtlsLandings += core.rtls_landings;
        if (core.status === 'lost') {
            acc.totalLostCores += 1;
        } else if (core.status === 'active') {
            acc.totalActiveCores += 1;
        }
        return acc
    }, {
            totalLaunches: 0, totalAsdsAttempts: 0, totalAsdsLandings: 0, totalRtlsAttempts: 0,
            totalRtlsLandings: 0, totalLostCores: 0, totalActiveCores: 0
        });

    return (
        <>
            <h1>Statistical data about all cores</h1>
            <div className="ui segments">
                <div className="ui teal inverted segment">
                    <div className="ui statistics">
                        <div className="statistic">
                            <div className="label">
                                Total launches
                            </div>
                            <div className="value">
                                {statisticalDataObject.totalLaunches}
                            </div>
                        </div>
                        <div className="statistic">
                            <div className="label">
                                Total lost cores
                            </div>
                            <div className="value">
                                {statisticalDataObject.totalLostCores}
                            </div>
                        </div>
                        <div className="statistic">
                            <div className="label">
                                Total active cores
                            </div>
                            <div className="value">
                                {statisticalDataObject.totalActiveCores}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui statistics">
                        <div className="statistic">
                            <div className="label">
                                Total ASDS attempted
                            </div>
                            <div className="value">
                                {statisticalDataObject.totalAsdsAttempts}
                            </div>
                        </div>
                        <div className="statistic">
                            <div className="label">
                                Total ASDS successful
                            </div>
                            <div className="value">
                                {statisticalDataObject.totalAsdsLandings}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui teal inverted segment">
                    <div className="ui statistics">
                        <div className="statistic">
                            <div className="label">
                                Total RTLS attempted
                            </div>
                            <div className="value">
                                {statisticalDataObject.totalRtlsAttempts}
                            </div>
                        </div>
                        <div className="statistic">
                            <div className="label">
                                Total RTLS successful
                            </div>
                            <div className="value">
                                {statisticalDataObject.totalRtlsLandings}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
