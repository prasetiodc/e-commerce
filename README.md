# e-commerce


## Project setup
```
npm install
```
## Compiles

```javascript
-server
npm run dev

-client
npm run serve
```

## Routes Users
|Routes|HTTP Method|Request|Response|Description| 
|----|----|----|----|----|----|
|/users  |POST  |fullname: String, email: String,  password: String |Success: {object},<br /> Error: Internal server error |Register a user|
|/users/login  |POST  |email: String , password: String |Success: {object},<br/>Error: Internal server error |User login |
|/users/:id  |GET  |id: String  |Success: {object}, <br />Error: Internal server error | User profile|
|/users/:id  |DELETE  |id: String  |Success: Delete Success (String), <br />Error: Internal server error | Delete a user|

## Routes Products
|Routes|HTTP Method|Request|Response|Description|
|----|----|----|----|----|----|
|/products  |GET  |none|Success: {object},<br /> Error: Internal server error|Get all product|
|/products/:id  |GET  |id: String|Success: {object},<br /> Error: Internal server error|Get a product|
|/products  |POST  |name : String, <br />price: Number, <br />stock: Number|Success: {object},<br /> Error: Internal server error | Create a product|
|/products/:id  |PUT  |id : String, <br /> name : String, <br />price: Number, <br />stock: Number| Success: {object}, <br />Error: Internal server error |Update a product|
|/products/:id  | DELETE  |id : String |Success: Delete success,<br /> Error: Internal server error |Delete a product|

## Routes Carts
|Routes|HTTP Method|Request|Response|Description| 
|----|----|----|----|----|----|
|/cart  |GET  | token : String  |Success: [ {object} ], <br />Error: Internal server error | List cart  a user|
|/cart  |POST  |userId: String, productId: String, quality: Number  |Success: {object}, <br />Error: Internal server error | Add product to user cart|
|/cart/:id | DELETE  |id : String |Success: Delete success,<br /> Error: Internal server error |Delete a cart| 
|/cart/:id | PUT  | id : String, userId: String, productId: String, quality: Number  |Success: {object},<br /> Error: Internal server error | Update a cart| 
