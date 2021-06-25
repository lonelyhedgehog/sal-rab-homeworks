function calcShipping(sum, min, shipping) {
    let productSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum
    let shippingSum;
    if (shippingSum == 0) {
        shippingSum = 0;
    } else if (shippingSum >= freeShippingMinSum) {
        shippingSum = 0;
    } else if (shippingSum <= 0) {
        shippingSum = shippingPrice;
    }
    // если productsSum равно 0,
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountPrice

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountPrice значение discountPart процентов от productsSum,
    // иначе присвойте discountPrice значения 0
    let discountPrice;
    if (productSum >= discountMinSum) {
        discountPrice = productSum-(productSum*discountPric/100);
    }
    else {
        discountPrice = 0;
    }
    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum

    let totalSum;
    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum
    totalSum = productSum;
    totalSum = totalSum - discountSum;
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    totalSum = totalSum + shippingPrice;
    // прибавьте к totalSum значение shippingSum

    // создайте переменную freeShipping
    let freeShipping;
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    freeShipping = shippingSum && 0;
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
