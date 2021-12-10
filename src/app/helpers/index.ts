export const fixedPrice = (price: string) => {
    const num = Number(price);

    return num.toFixed(2);
};