export const removeRepeatedDates = (dates) => {
    const uniqueDateObjects = [];
    const seenDates = new Set();

    dates.forEach(date => {
        if(!seenDates.has(date.formattedDate)){
            seenDates.add(date.formattedDate);
            uniqueDateObjects.push(date);
        }
    });
    return uniqueDateObjects;
}

export const orderDates = (dates) => {
    dates.sort((a, b) => {
        const dateA = moment(a.formattedDate, 'DD/MM/YYYY');
        const dateB = moment(b.formattedDate, 'DD/MM/YYYY');
        return dateA - dateB;
    })
}