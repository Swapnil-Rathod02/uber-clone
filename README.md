# Uber Clone Backend

## Endpoints

### User Routes

- **POST /users/signin**

  - Description: Register a new user.
  - Middleware: `signInRules`
  - Controller: `userRegistration`

- **POST /users/login**

  - Description: Log in a user.
  - Controller: `logInHandle`

- **GET /users/profile**

  - Description: Get user profile.
  - Middleware: `isAuthenticated`
  - Controller: Inline function (logs "ok")

- **GET /users/logout**
  - Description: Log out a user.
  - Controller: `logOutHandler`

### Captain Routes

- **POST /captain/register**
  - Description: Register a new captain.
  - Middleware: `captainRegistration`
  - Controller: `captainRegistrationHandler` (Assumed, not provided in the code)

## Middleware

### isAuthenticated

- Description: Checks if the user is authenticated by verifying the token.
- File: `Middleware/auth.Middleware.js`
- Usage: Applied to routes that require authentication.

## Validators

### signInRules

- Description: Validation rules for user registration.
- File: `Helpers/validators.js`

### captainRegistration

- Description: Validation rules for captain registration.
- File: `Helpers/validators.js`

## Token Helpers

### setToken

- Description: Generates a JWT token for a user.
- File: `Helpers/jsonToken.js`

### getTokenToInfo

- Description: Decodes a JWT token to get user information.
- File: `Helpers/jsonToken.js`
