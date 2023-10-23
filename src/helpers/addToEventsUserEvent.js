export const addToEventsUserEvent = (userProgramEvents=[], globalEvents = [], userAvailableWebinars) => {
    console.log('TTQ', userProgramEvents, globalEvents, userAvailableWebinars)
    const matchingEvents = globalEvents.filter(event => {
        console.log('TTQ 1', event)
        return userAvailableWebinars.some(webinar => webinar.id === event.id);
    });

    console.log('TTQ 2', [...userProgramEvents, ...matchingEvents])
    return [...userProgramEvents, ...matchingEvents]
}