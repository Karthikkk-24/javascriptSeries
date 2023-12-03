// Strategy Pattern

class PaymentStrategy {
    pay(amount) {
        throw new Error('Pay method is not implemented');
    }
}


class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying ${amount} using credit card...`); // Paying 100 using credit card...
    }
}

class GooglePayPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying ${amount} using GPay...`); // Paying 200 using GPay...
    }
}

class ShoppingCart {
    constructor (paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount) {
        this.paymentStrategy.pay(amount);
    }
}

const creditCardPayment = new CreditCardPayment();
const googlePayPayment = new GooglePayPayment();

const cart1 = new ShoppingCart(creditCardPayment);
const cart2 = new ShoppingCart(googlePayPayment);

cart1.checkout(100);
cart2.checkout(200);

