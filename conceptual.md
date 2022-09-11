### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
-- Using Async paired with await. These tools allow the program to wait for the promise to be fully fulfilled even though it wasn't prepared when the program ran initially. You can also use the try the "then()" method, which also returns the value of a promise after it has successfully been loaded.

- What is a Promise?
-- A promise is the confirmation that an object is there. The promise can be in 3 different states: fullfilled, pending or rejected. Because of the slight time difference between the program running and the content from some request loading, the content may not be there when the program runs. Promises sovle this problem by waiting, while the program runs, to get the object. 

- What are the differences between an async function and a regular function?
-- Async functions do the same thing the "then()" method does. That is it waits for the promise of some request to be fulfilled before trying to it in the program.

- What is the difference between Node.js and Express.js?
-- Node.js is much like Python or Java. It is a backend programming language used to write code that deals with server-side functionality. Express.js is a framework, much like Flask. This framework helps in the process of building a serving, connected it to a database, and writing logic that all happens before it reaches to browser. JavaScript, while virtually having the same syntax, has its functionality on the server side, in the browser.

- What is the error-first callback pattern?
-- When working with any kind call back function, the pattern is having the error be the first thing in the callback, then the following logic at the end. For normal functions try and catch are used.

- What is middleware?
-- They are functions that can be called using 'use' before every end-route is ran.  In flask there is an object called "g" that kept track of the current user. This is Express.js's version of that. 

- What does the `next` function do?
-- When next is called in a function, it allows for the program to continue down the page until it finds another route that satisfies its request. Often there is an "app.use" at the end of the programming with a 404 waiting to be returned or some kind of error handling. If a user makes a request that it doesn't meet any of the routes, then what they are looking for doesn't exist in the program and it will by-pass everything, expect that last "app.use()".

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
-- Calling await during the initialization is normal if you have one request you're making. But when they are stacked up like this, each request under the first must wait for the one above to finish processing. If they depend on each other, then that’s a good thing. However, if they are three independent api calls, they its being slowed down unnecessarily. A way around this would be to call the await keyword later while initializing the promise to another variable.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}