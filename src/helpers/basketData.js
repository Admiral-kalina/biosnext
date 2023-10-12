export const BASKET_TYPES = {
    WEBINAR: 'webinars',
    PROGRAM: 'programs'
};

export const getBasketData = () => {
    const stringifiedBasketData = localStorage.getItem("basket") || '""';
    return JSON.parse(stringifiedBasketData) || [];
};

export const storeBasketData = (data, type) => {
    localStorage.setItem(
        "basket",
        JSON.stringify({
            [type]: data
        })
    );
};

