import webinars from "@/components/Webinars/Webinars";

export const BASKET_TYPES = {
    WEBINAR: 'webinars',
    PROGRAM: 'programs'
};

const getBasketPrice = (programs, webinars) => {
    let basketPrice = 0;

    programs.forEach((program) => program.price ? basketPrice += program.price : '');
    webinars.forEach((webinar) => webinar.price ? basketPrice += webinar.price : '');

    return basketPrice;
}

export const getBasketData = () => {
    const storedPrograms = JSON.parse(localStorage.getItem("programs") || '[]');
    const storedWebinars = JSON.parse(localStorage.getItem("webinars") || '[]');

    const programs = storedPrograms.programs || [];
    const webinars = storedWebinars.webinars || [];

    const count = programs.length + webinars.length;
    const totalPrice = getBasketPrice(programs, webinars)
    return {programs, webinars, count, totalPrice}
};

export const storeBasketData = (data, type) => {
    localStorage.setItem(
        type,
        JSON.stringify({
            [type]: data
        })
    );
};


export const groupBasketData = (programs = [], webinars = []) => {
    const generateHtmlForNames = (title, names) => {
        if (!names.length) return '';  // If the names array is empty, return an empty string.
        return `
            <div>${title} :
                ${names.map(name => `<p>${name}</p>`).join('')}
            </div>
        `;
    };

    const webinarsName = webinars.map(webinar => webinar.name);
    const programsName = programs.map(program => program.name);

    const webinarsHtml = generateHtmlForNames('Вебинары', webinarsName);
    const programsHtml = generateHtmlForNames('Програмы', programsName);

    // If neither webinars nor programs have names, return an appropriate message or empty string.
    if (!webinarsHtml && !programsHtml) return '<div>No data available.</div>';

    return `
        <div>
            ${programsHtml}
            ${webinarsHtml}
        </div>
    `;
}