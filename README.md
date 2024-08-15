Welcome to my TypeScript fully-functional e-commerce website exactly like amazon build using MERN stack (MongoDB, ExpressJS, React and Node.JS).

## Website

- 👉 Render : [live](https://amazon-clone-rwkf.onrender.com/)

## Tech

- Creating react application by Vite in TypeScript
- Defining and exporting Types like product, orders and user in frontend
- Creating e-commerce pages like cart, checkout and place order using React Router Dom
- Using React hooks to handle form inputs and fetch backend api
- Managing and monitoring application state by React Context
- Handling shopping cart using reducers and local storage
- Building backend web api by node.js, express.js and MongoDB
- Handling authentication and authorization using JsonWebToken and express middleware.
- Deploying your application on cloud servers like Render
- PayPal and Stipe for online payment,
- Render for deployment
- Google Map for locate customer address on map
- Mailgun to email order receipt to user

## Run Locally

### 1. Clone repo

```
$ git clone link
$ cd amazon-clone
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Seed Users and Products

- Run this on browser: http://localhost:5000/api/seed

### 7. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin
