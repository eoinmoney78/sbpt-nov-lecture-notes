
let menu = {
    burger: 10.99,
    fries: 2.99,
    shake: 4.99,
    salad: 7.99,
    order: function (orderPlaced) {
        let orderSplit = orderPlaced.split(", ");
        let sum = 0;
        for (let item of orderSplit) {
            sum += menu[item];
        }
        console.log(sum);
    }
};
menu.order("burger, fries, shake");