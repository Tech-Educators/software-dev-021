# Clerk set-up

## Step 1: Install clerk

```bash
npm install @clerk/nextjs
```

## Step 2: Connect our clerk application with our app

- We will use environment variables
- Go to your application > Configure > Developers > API keys
- Create .env.local file
- Paste your keys

## Step 3: Set up your middleware.js file

- The middleware.js file goes in the **src folder**
- There is a template in the [clerk documentation](https://clerk.com/docs/reference/nextjs/clerk-middleware)

## Step 4: Set up the clerk provider

- In the root layout.js, import and nest your root elements within the ClerkProvider

## Step 5: Configure public and protected routes in the middleware.js

- Decide which routes are public and protected
- Add the protected routes to your middleware.js file
- Write middleware logic to protect your routes

## Step 6: Set up custom sign-in and sign-up routes

- Create two routes: sign-in and sign-up
- Add an optional [catch-all segment](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes#catch-all-segments)
- Add a page in the catch-all segment folder
- Import the SignUp and SignIn components from clerk in their own respective pages
- Configure clerk to use our custom sign-in and sign-up routes instead of the default app ones --> environment variables

## Step 7: Improve UI with more user-friendly clerk components

- Most common components are: UserButton, SignedIn, SignedOut, SignInButton,SignUpButton
- You can customise their [appearance](https://clerk.com/docs/guides/customizing-clerk/appearance-prop/overview)
- You can test your components with [test emails and phone numbers](https://clerk.com/docs/guides/development/testing/test-emails-and-phones#email-addresses)

### Extra: Access user id in your app

- We use [auth()](https://clerk.com/docs/reference/nextjs/app-router/auth) to access the userId
