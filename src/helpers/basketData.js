export const storeBasketData = (data) => {
    localStorage.setItem(
        "basket",
        JSON.stringify({
            programs:'',
            webinars:''
        })
    );
};


export const getBasketData = () => {
    const stringifiedBasketData = localStorage.getItem("basket") || '""';
    return JSON.parse(stringifiedBasketData || {});
};
