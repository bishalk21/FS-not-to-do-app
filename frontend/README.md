This is my Not TøDo List App.

This is a simple app that I made to learn React and Redux. It is a simple app that allows you to add and remove tasks from a list. It also allows you to mark tasks as completed.

## Installation

To install the app, you need to have Node.js installed. Then, you can run the following commands:

```bash
npm install
npm start
```

# Key Takeaway

## useEffect hook

The useEffect hook is used to run a function when the component is mounted or when a state variable changes. In this app, I used it to fetch the tasks from the server when the component is mounted. I also used it to update the tasks in the server when the tasks state variable changes.

### dependency in useEffect

The dependency array in useEffect is used to specify when the function should be run. If the array is empty, the function will be run only when the component is mounted. If the array contains a state variable, the function will be run when the component is mounted and when the state variable changes. If dependency not passed then it will run on every render meaning application will load or render forever.

## CORS error

> What is CORS error?

CORS stands for Cross-Origin Resource Sharing. It is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.

When I was making this app, I was getting a CORS error when I tried to fetch the tasks from the server.

What it means You cannot have CORS related files working unless you have defined in your code.
My application was loading in localhost:3000 domain which was making request to localhost:5000 domain. So I had to define in my code that localhost:3000 is allowed to make request to localhost:5000. And browser didn't allow to make request to localhost:5000 because of CORS policy.

> We cannot call
