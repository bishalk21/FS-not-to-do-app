This is api for my Not ToDo List app.

## How to run

1. Install dependencies

```bash
npm install
```

2. Run the app

```bash
npm start
```

3. Open the app in browser

```bash
http://localhost:8000
```

- we send a request from client side to the url end point with the post method and the data, and then receieve data through the req.body afterwhich we do insert query db and once data is there we can call any time.

## Downcast in Js

- Downcast is a process of converting a value of a higher type to a value of a lower type.

```js
let a = 10;
let b = a.toString();
```

```js
let task = { id: 3 };

let tt = task;

if (id) {
  tt = task.filter((task) => task.id === id);
}
```

    ```js
    let task = { id: "3" };
    let id = parseInt(task.id);
    ```

## Upcast in Js

- Upcast is a process of converting a value of a lower type to a value of a higher type.

```js
let a = "10";
let b = parseInt(a);
```

## Steps While fetching data from Database

1. Create a connection to the database
2. Create a query to fetch data from the database
3. Execute the query
4. Fetch the data from the result

## sending or posting data using rest.http

- need to send data as object as json file
- need to specify what type of data are we sending by sending HEADER - `Content-Type: application/json`

## Key Takeaway from this project

- Anybody sends data using POST method, Express need sets to be made to convert the data and make available in req.body by injecting some middleware before any respose happens like:

```js
app.use(express.json());
```

## Middlewares

- Middlewares are functions that are executed in the middle of the request and response cycle.
- Middlewares are used to modify the request and response objects.
- Middlewares are used to execute some code before the request is processed by the route handler.
- Middlewares are used to execute some code after the request is processed by the route handler.
- Middlewares are used to execute some code if the request is not processed by the route handler.

1. app.use();

- app.use() is used to register a middleware function that will be executed for every request to a specific route and HTTP method.

2. express.json();

- express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

## router.get("/:id")

- we can use `router.get("/:id")` to get the id from the url and/or `expecting something from db` and use it in the query to fetch the data from the database.
- after semicolon is variable and whatever you send data will be available in variable
- we receive this data in express through `req.params`.

## router.get("/:id?")

- we can use `router.get("/:id?")` to get the id from the url or `expecting something from db` and use it in the query to fetch the data from the database.
- after semicolon is variable and whatever you send data will be available in variable
- we receive this data in express through `req.params`.
- we can use `?` to make the id optional.

### req.body

- req.body is a property on the request object that contains the body of the request.

### Difference between PUT and PATCH method

PUT method is used to update the whole resource. PATCH method is used to update the partial resource.
If you have a lot of data stored in your db, and if you are updating partial or few part of the data then we use patch method. If updating entire information based on given id, we use put method.

### POST method

POST method is used to create a new resource.

### GET method

GET method is used to get the resource.

### DELETE method

DELETE method is used to delete the resource.

### throw new Error

throw new Error is used to throw an error. It is used to stop the execution of the code.

```js
throw new Error("Error message");
```

### try catch

try catch is used to catch the error. It is used to handle the error.

```js
try {
  // code
} catch (error) {
  // error handling
}
```
