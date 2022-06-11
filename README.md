# Getting Started with Fastify-CLI [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)
This project was bootstrapped with Fastify-CLI.

## Requests
```js
GET http://localhost:3000/products
Accept: application/json


GET http://localhost:3000/products/1
Accept: application/json


DELETE http://localhost:3000/products/4
Accept: application/json


POST http://localhost:3000/products
Accept: application/json
Content-Type: application/json

{
"name": "Product New",
"price": 200
}


PUT http://localhost:3000/products/1
Accept: application/json
Content-Type: application/json

{
"name": "Product Updated",
"price": 250
}
```


## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).
