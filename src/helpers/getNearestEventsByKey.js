import moment from "moment";

/**
 * This function adds two numbers.
 * @param {array} data - Data array
 * @param {string} key - The key to sort
 * @param {number} numberOfEvents - number of elements to be returned
 * @returns {array}  - The sum of a and b.
 */


const sortByKeyAfterToday = (data, key) => {
    const today = moment().startOf('day');
    return [...data]  // create a shallow copy
        .filter(event => moment(event[key]).isSameOrAfter(today))
        .sort((a, b) => moment(a[key]).diff(moment(b[key])));
}

const sortByKey = (data, key) => {
    return [...data]  // create a shallow copy
        .sort((a, b) => moment(a[key]).diff(moment(b[key])));
}

export const getNearestEventsByKey = (data, key, numberOfEvents = 2) =>
    sortByKeyAfterToday(data, key).slice(0, numberOfEvents);

export const getAllNearestEvents = sortByKeyAfterToday;

export const getAllEventsWithSort = sortByKey;