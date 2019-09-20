import { ShoppingCard } from './shoppingCard';

interface Product {
    items: {
        amount: {
            quantity: number;
            size: string;
        };
        name: string;
        category: string;
        price: number;
        photo: string;
        id: string;
    };
}

export class Order {
   public message: string = '';
    constructor(public cart: ShoppingCard, public form)  {}

    get totalMoney() {
       let count = 0;
       this.cart.items.forEach(element => {
           count += element.amount.quantity * element.product.price;
        });
       return count.toFixed(2);
    }
}
