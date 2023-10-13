export const convertExactTime = (time) => {
    // Split the time by colon
    const parts = time.split(':');
    // Return the first two parts (hours and minutes) joined by a colon
    return parts.slice(0, 2).join(':');
}