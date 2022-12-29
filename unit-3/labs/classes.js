// ! classes

/*
   --Introduced in 2015 
   - A function that helps us create objects
   -Defines a category of objects

   Base structure


   Class NameOfClass {
    constructor(parameter) {
        this.key = parameter
    }
    methodName() {
        ...code block
    }
   }

*/

//1     2
class Item {
    //   3               4

    constructor(name, desc, price) {
        //     5      6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}


/* 
1. Keyword  (class) that defines what "type" of function we are building.

2.Class Name  (Item) Noted in pascal casing to help determine what type of function we are referencing later in our code.

3. Another key word . This is activated when we instantiate a new object.

4. The parameters for our constructed object. Established the values of our new object.

5. Keyword - refers to "this" specific object being created.

6. The name of a key to our new object. (An item object will have 3 keys: name, description, price)

7.The value for those keys (referenced by the parameters)
*/


class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject()
console.log(one);
one.name = "sample";
console.log(one);


let ItemZero = new Item();
console.log(ItemZero); // returns an object with set keys that hold undefined values.

let itemOne = new Item('beans', 'canned', 0.89);
console.log(itemOne);

// let BrokenItem = Item();
// console.log(BrokenItem);
//  TypeError: Class constructor item cannot be invoked without "new";

//* Factory Functions


let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(item, desc, cost) {
    return new Item(item, desc, cost);
}

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction);

// *  Methods

class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.item = []; // making  a default value for this key.
    }
    addToInventory(newItem) {
        this.item.push(newItem);
        // console.log('Item added!');
        console.table(this.items);
    }
}

// 
let dryGoods = new DeptInventory('Dry Goods');
let itemTwo = new Item('corn', 'canned', 0.79);

console.log(dryGoods);
dryGoods.addToInventory(itemTwo);
dryGoods.addToInventory(itemOne);
console.log(dryGoods);

/* 
    1. Establishing a name for our method.
    2. This method requires a parameter.
    3. "this" is referencing "Dry Goods" object and adding to its array of items.
    4. Using an Array method to push to the items array.
    5.Generating a new dept object.
    6. Using dot notation to target our method within our dryGoods object.

*/


//*   Factory Methods

class Expense {
    static addUpChargeForProfit(wholesale) {
        let upCharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upCharge);
    }
    //only reachable within the class itself - not Global
    constructor(w, u) {
        this.purchased_price = w;
        this.sell_at = u;
    }
}
let itemToSell = Expense.addUpChargeForProfit(1);
console.log(itemToSell);



