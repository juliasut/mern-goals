## 1 REST AP

<img width="736" alt="Screen Shot 2023-01-13 at 3 18 26 PM" src="https://user-images.githubusercontent.com/81769855/212429704-e9da896e-822f-4b71-b60c-6c1a066981db.png">

Separate routes for /api/goals under goalsRouter

Middleware are functions that are being exectuted during the req res cycle.

Using custom errorMiddleware to only get stack error shown in development mode.

Instead of try catch in controllers async functions, we'll use package express-error-handler.
