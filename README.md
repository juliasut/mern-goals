## 1 REST AP

<img width="736" alt="Screen Shot 2023-01-13 at 3 18 26 PM" src="https://user-images.githubusercontent.com/81769855/212429704-e9da896e-822f-4b71-b60c-6c1a066981db.png">

Separate routes for /api/goals under goalsRouter

Middleware are functions that are being exectuted during the req res cycle.

Using custom errorMiddleware to only get stack error shown in development mode.

Instead of try catch in controllers async functions, we'll use package express-async-handler.

### Models

Goals
Users

Bring mongoose ODM.
Define schema with the necessary fields. Wrap in mongoose.Schema()
To export, wrap in mongoose.model(name, schema)

To associate User with a Goal, we'll add a user field with type of ObjectId and specify ref: "User" (name of the model)

## JWT Authentication

install bcrypt to encrypt the user passwords and jsonwebtoken

in usersController
when a user registers, we check for valid req fields, then check if such user already exists in our db. If not, a new user is created with hashed password.

when user logins, find a user by email, compare user's password with stored hashed one, respond user info without password.

in both cases wwe also return a token generated by jsonwebtoken sign method.

Authorization Middleware:
we check if there is an athorization header that starts with 'Bearer' and get the token, decode it using jsonwebtoken verify() method, then find user with the property we set on token earlier (id), making sure not to select password. 

We use this middleware in usersRouter, putting it as the second parameter (after a protected route name)
