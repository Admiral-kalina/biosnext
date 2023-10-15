export const createCalendarEvents = (programs, general) => {
    return programs
        .reduce((acc, curr) => {
            const programId = curr.id; // Get the programId
            const dataItems = curr.webbinarrs?.data || [];

            // Concatenate the data items to the accumulator, adding the programId to each item
            const itemsWithProgramId = dataItems.map(item => ({
                ...item,
                programId
            }));

            return acc.concat(itemsWithProgramId);
        }, [])
        .map(item => {
            const data = item.attributes || item;
            const startDate = new Date(data.date);

            const programId = item.programId;
            const webinarId = item.id;


            const programLink = general
                ? `/services/programs/${programId}`
                : `/home/programs/program/?program=${programId}#programs`;

            const eventLink = general
                ? `/services/webinars-and-lectures/${webinarId}`
                : `/home/webinars/webinar/?webinar=${webinarId}#webinars`;

            return {
                ...data,
                start: startDate,
                end: startDate,
                programLink,
                eventLink,
                topic: "Фармалкология",
                type: "Вебинар",
                price: 500,
                id: webinarId,
            };
        });
}