# NPM Set-up

## Step 1

- Initialise NPM in your project

```bash
npm init -y
```

This command will create a file called package.json

## Step 2

- Install packages

```bash
npm install packageName
```

You can abbreviate install to i

```bash
npm i packageName
```

Check the documentation to see how to install the package

## Step 3

- Ignore your node modules and secret files

- Create a .gitignore file
- Add the name of the files and folders you don't want to push to your GitHub repo.

## Step 4

- Add a JS file to start coding!

## Step 5

- Turn your JS file into a module.

- We are going to add `"type": "module"` into our package.json

## Extra step

- We can add a script to our `package.json` to run our app
- We usually call it `dev` because we are running our app in the development environment

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node app"
  },
```

- Now we can use `npm run dev` to run our JS file

```bash
npm run dev
```
