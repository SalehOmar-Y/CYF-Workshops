function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function createMain() {
  const main = document.createElement("main");
  main.innerHTML = `
    <p id="counter" data-testid="counter">0</p>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
  `;

  const button = main.querySelector("#increment");
  const counter = main.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });
 const decrementButton = main.querySelector("#decrement");
  decrementButton.addEventListener("click", () => {
    decrement(counter);
  });

  return main;
}
