export const createCalendarEvents = (programs, general, t) => {
    console.log('PE initial',programs)
    let a = programs
        .reduce((acc, curr) => {
            const programId = curr.id; // Get the programId
            const dataItems = curr.webbinarrs?.data || [];
            // Concatenate the data items to the accumulator, adding the programId to each item
            const itemsWithProgramId = dataItems.map(item => {
                console.log('PE',item)
                if (item.attributes) {
                    return {
                        ...item.attributes,
                        programId,
                        webinarId: item.id
                    }
                }else{
                    return {
                        ...item,
                        programId
                    }
                }


            });

            return acc.concat(itemsWithProgramId);
        }, [])


    // console.log('PE', a)

}