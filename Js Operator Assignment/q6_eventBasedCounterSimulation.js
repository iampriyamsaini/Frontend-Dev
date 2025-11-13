
let count = 0;
function increment() {
  function update() {
    count++;
    console.log('Incremented ->', count);
  }
  update();
}
function decrement() {
  function update() {
    count--;
    console.log('Decremented ->', count);
  }
  update();
}
increment();
increment();
decrement();
increment();
decrement();
decrement();
