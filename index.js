const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

const subscription = observable.subscribe(
  (next) => console.log(`1st got value ${next}`),
  () => {},
  () => console.log(`1st completed`)
);

subscription.unsubscribe();