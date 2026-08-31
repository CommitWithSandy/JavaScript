# Fetch API — JavaScript Notes

## What is Fetch API?

**Fetch API** is a modern, built-in JavaScript API used to make **HTTP requests** to a server and communicate with web APIs.

It allows us to:

- Get data from a server
- Send data to a server
- Update data
- Delete data

Fetch API is commonly used in frontend development to communicate with backend APIs.

---

## Basic Flow

```text
Client / Browser
       ↓
    fetch()
       ↓
   HTTP Request
       ↓
     Server
       ↓
   HTTP Response
       ↓
  Response Object
       ↓
   response.json()
       ↓
   Actual Data
```

---

## Why does Fetch API return a Promise?

Communication with a server takes some time. JavaScript should not stop the entire program while waiting for the server.

Therefore, `fetch()` returns a **Promise** that represents the future result of the network request.

We can handle the Promise using:

- `.then()` and `.catch()`
- `async/await`

---

## Basic Fetch Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

### What happens here?

### Step 1 — `fetch()`

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
```

`fetch()` sends an HTTP request to the given URL.

It returns a **Promise**.

### Step 2 — Receive Response

```javascript
.then((response) => {
    return response.json();
})
```

The server sends a response.

The `response` is a **Response object**, not the actual JSON data.

### Step 3 — Convert Response to JSON

```javascript
response.json()
```

This reads the response body and converts JSON into a JavaScript value.

`response.json()` also returns a Promise.

### Step 4 — Get Actual Data

```javascript
.then((data) => {
    console.log(data);
})
```

Now `data` contains the actual response data.

### Step 5 — Handle Errors

```javascript
.catch((error) => {
    console.log(error);
})
```

This handles errors that occur while processing the Promise.

---

# Fetch API with Async/Await

The same request can be written using `async/await`.

```javascript
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
```

This is often easier to read because asynchronous code looks more like normal synchronous code.

---

# Request and Response

Whenever we communicate with an API, there are two important concepts:

## 1. Request

A **request** is sent from the browser/client to the server.

A request can contain:

- URL
- HTTP method
- Headers
- Body/data

Example:

```javascript
fetch("/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: "Sandy"
    })
});
```

---

## 2. Response

A **response** is sent from the server back to the browser.

A response can contain:

- Status code
- Headers
- Response body/data

Example:

```javascript
const response = await fetch("/users");
```

Here, `response` is a **Response object**.

To read JSON data:

```javascript
const data = await response.json();
```

---

# HTTP Methods

Fetch API can be used with different HTTP methods.

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create/send data |
| PUT | Replace/update existing data |
| PATCH | Partially update existing data |
| DELETE | Delete data |

### GET

Used to retrieve data.

```javascript
fetch("/users");
```

### POST

Used to send/create data.

```javascript
fetch("/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: "Sandy",
        email: "sandy@example.com"
    })
});
```

### PUT

Used to replace or update existing data.

### PATCH

Used to partially update existing data.

### DELETE

Used to delete existing data.

---

# Fetch API and JSON

Most web APIs exchange data using **JSON (JavaScript Object Notation)**.

When receiving JSON:

```javascript
const data = await response.json();
```

When sending JavaScript data to a server:

```javascript
JSON.stringify(data);
```

`JSON.stringify()` converts a JavaScript object into a JSON string.

---

# Important: `fetch()` and Response

A common mistake is thinking that:

```javascript
const response = await fetch(url);
```

gives the actual data.

It does **not**.

The flow is:

```text
fetch()
   ↓
Promise
   ↓
Response Object
   ↓
response.json()
   ↓
Promise
   ↓
Actual Data
```

Therefore:

```javascript
const response = await fetch(url);
const data = await response.json();
```

- `response` → Response object
- `data` → Actual JSON data

---

# Checking HTTP Errors

`fetch()` does not automatically reject its Promise for HTTP status codes such as `404` or `500`.

A common approach is to check `response.ok`.

```javascript
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

---

# Fetch API vs Promise

These two concepts are related but different.

### Fetch API

Used to make network requests.

### Promise

Used to represent and handle the future result of an asynchronous operation.

Simple way to remember:

> **Fetch API is the tool for making the network request, while Promise is the mechanism used to handle its asynchronous result.**

---

# Interview Answer

### What is Fetch API?

> **Fetch API is a built-in JavaScript API used to make HTTP requests and communicate with servers or web APIs. It is asynchronous and returns a Promise. We can use it to perform operations like GET, POST, PUT, PATCH, and DELETE. The response can be processed using methods like `response.json()`, and the Promise can be handled using `.then()/.catch()` or `async/await`.**

---

# Important Interview Points

Remember these points:

1. Fetch API is built into modern JavaScript.
2. It is used for communicating with servers/APIs.
3. `fetch()` returns a Promise.
4. The first result is a `Response` object.
5. `response.json()` returns another Promise.
6. Use `.then()/.catch()` or `async/await`.
7. Fetch supports GET, POST, PUT, PATCH, and DELETE.
8. JSON is commonly used for API data.
9. `JSON.stringify()` converts JavaScript data to JSON.
10. Check `response.ok` when you want HTTP errors such as 404/500 to be treated as errors.

---

## Quick Revision

```text
Fetch API
    ↓
Used for HTTP requests
    ↓
fetch() returns Promise
    ↓
Response Object
    ↓
response.json()
    ↓
Actual Data
```

### Most important line:

> **Fetch API is used to communicate with a server, and it returns a Promise because the network operation is asynchronous.**
