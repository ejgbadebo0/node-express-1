### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  * setTimeout(), async/await, Promises 
- What is a Promise?
  * A special type of object that allows handling of asynchronous functions.
- What are the differences between an async function and a regular function?
  * Regular functions run synchronously with JS and return a value immediately. Async functions may take some time to return a value.
- What is the difference between Node.js and Express.js?
  * Node.js allows you to develop apps in JS server-side. Express.js is a framework that uses Node.js to set up an API.
- What is the error-first callback pattern?
  * It uses keywords next and err to handle events in which an error is thrown. Determines the next function to be run in the case of an error.
- What is middleware?
  * Middleware is an operation that runs in-between request/response cycles.
- What does the `next` function do?
  * Calls the function that is defined as next to be run in the case of an error. Usually having err in the parameters.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
* Can replace the base URL in the getJSON function with a const variable and sub in the username as another variable.
