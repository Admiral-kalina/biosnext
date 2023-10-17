export const createCalendarEvents = (programs, general,t) => {
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
            console.log('QQ',data)
            return {
                ...data,
                start: startDate,
                end: startDate,
                programLink,
                eventLink,
                topic: data.topic,
                type: t('additional.webinar'),
                price:data.price,
                id: webinarId,
            };
        });
}