const discountCal = (price, discount) => {
    const amountDiscount = (price*discount)/100;
    return price - amountDiscount;
}

const calSaving = (price, discount) => {
    const amountDiscount = discountCal(price, discount);
    return price - amountDiscount;
}

export {discountCal, calSaving};