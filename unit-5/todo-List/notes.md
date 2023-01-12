# getting started

- create a `package.json`
- In terminal ~ cli command: `npm init -y`
  -Install our dependencies
  -express: `npm i express`
  -Create a `.gitignore` file
- `/node_modules` within gitignore
  -tells our local repo to ignore the `node_modules` folder when backing up.
  -node_modules folder
- Provides us access to any "behind the scenes" code that helps run express and any other dependency.
  -package-lock.json
  -locaks project into required dependencies. helps with versioning.
  -updated our `package.json` with `"main:": "app.js"` instead of `index.js`.
  -Create a root JS file -`index.js` or `app.js`

# CRUD

-Create : POST
-Read: GET
-Update: PUT / PATCH
-Delete: DELETE

# # POSTMAN

- Set Methods
- Get / POST /PUT / DElete on routes
  Body
- raw
- JSON - Make a JSON object

## ## Preparing our server to handle JSON objects

In our ```ap.js` we need to have this line of code

```js
app.use(express.json());
```

This provides us access to JSON files throughout our routes.

## MVC

- Model View Controller
  -Architecture pattern that helps our separation of concerns
  -View
  -browser, Postman , ect....
  -Applications that interface with our server.

- Controller:
- Part of the server application which handle logic.
- Model:
- Database schematic

## Middleware

- a function that accesses the rewquest and response
  -Has a call stack:
  -Request
  -Response
-
