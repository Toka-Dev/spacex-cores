import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * SpaceXApi for api calls,
 * on rendering and on events / conditions
 */

/**
 * Useful for http data as a dependency in rendering
 *
 * @param {string} method, http method
 * @param {string} path, relative path to baseUrl
 * @returns Response Data
 */
export default function useSpaceXApi(method, path) {
    const [data, setData] = useState(null);

    useEffect(() => {
        spaceXApi(
            method,
            path,
            _data => setData(_data)
        )
    }, [method, path])

    return data;
}

/**
 * Useful for calls on events or in condition
 *
 * @param {string} method, http method
 * @param {string} path, relative path to baseUrl
 * @param {function} callback, callback, gets `response.data` as an argument
 */
export function spaceXApi(method, path, callback) {
    const baseUrl = 'https://api.spacexdata.com/v4'

    axios({
        method: method,
        url: `${baseUrl}/${path}`
    })
        .then((response) => callback(response.data))
}