// Observer Pattern

class NewsPublisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    notify(message) {
        this.subscribers.forEach(subscriber => subscriber.update(message));
    }
}

class NewsSubscriber {
    update(message) {
        console.log(`Subscriber received: ${message}`); // Subscriber receieved: Hello World!, Subscriber received: Hello World!
    }
}

const newsPublisher = new NewsPublisher();
const subscriber1 = new NewsSubscriber();
const subscriber2 = new NewsSubscriber();

newsPublisher.subscribe(subscriber1);
newsPublisher.subscribe(subscriber2);

newsPublisher.notify('Hello World!');