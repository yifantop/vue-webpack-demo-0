function aSayHello() {
  console.log("hello");
}

window.aSayHello = aSayHello;
console.log("window.aSayHello: ", window.aSayHello);
if (window.aSayHello) {
  window.aSayHello();
}
