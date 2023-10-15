// Observables

import { fromEvent } from 'rxjs';

const button = document.getElementById('myButton');
const buttonClicks = fromEvent(button, 'click');

buttonClicks.subscribe(event => {
  console.log('Button Clicked: ', event);
});
