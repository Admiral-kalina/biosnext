import moment from "moment";
/**
 * This function adds two numbers.
 * @param {array} data - Data array
 * @param {string} key - The key to sort
 * @param {number} numberOfEvents - number of elements to be returned
 * @returns {array}  - The sum of a and b.
 */
export const getNearestEventsByKey = (data, key, numberOfEvents = 2) => {
   return data
       .filter(event => {
       return moment(event[key]).isSameOrAfter(moment(new Date()))
   })
       .sort((a, b) => {
        return moment(a[key]).isAfter(b[key])? 1 : -1
    }).slice(0,numberOfEvents);
}
