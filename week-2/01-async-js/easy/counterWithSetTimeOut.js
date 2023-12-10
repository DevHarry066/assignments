// Without using setInterval, try to code a counter in Javascript.

counter = 0;
function counterFunction() {
  setTimeout(function () {
    counter += 1;
    console.log(counter);
    counterFunction();
  }, 1000);
}
counterFunction();
