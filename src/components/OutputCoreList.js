import React, { useState } from 'react';
import CoreListItem from './CoreListItem';

/**
 * Shows a list of cores
 * @param {array} props, array of cores
 * @returns an overview of the cores with some information
 */
export default function OutputCoreList(props) {

    const [filterCores, setFilterCores] = useState(false);
    const [sortCores, setSortCores] = useState(false);
    let showingCores = [...props.cores];

    const handleReset = () => {
        setFilterCores(false);
        setSortCores(false);
    }

    if (filterCores) {
        showingCores = props.cores.filter(core => { return core.status === 'active' });
    }

    if (sortCores) {
        showingCores.sort((core1, core2) => core2.reuse_count - core1.reuse_count);
    }

    return (
        <>
            <h1>Overview about all cores</h1>
            <form className="ui form" onReset={handleReset}>
                <div className="inline field">
                    <div className="ui toggle checkbox">
                        <input type="checkbox" checked={filterCores} onChange={(e) => setFilterCores(e.target.checked)} />
                        <label>Show active cores</label>
                    </div>
                </div>
                <div className="inline field">
                    <div className="ui toggle checkbox">
                        <input type="checkbox" checked={sortCores} onChange={(e) => setSortCores(e.target.checked)} />
                        <label>Sort by reuse count (descending)</label>
                    </div>
                </div>
                <button className="ui button" type="reset">Reset</button>
            </form>
            <h3>List of results:</h3>
            <div className="ui cards">
                {
                    showingCores.map(core => <CoreListItem core={core} key={core.id} />)
                }
            </div>
        </>
    )
}