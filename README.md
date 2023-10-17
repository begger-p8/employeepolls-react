# Employee Polls Project

This React-Redux project is part of the Udacity React Nanodegree. Employees can access the application and create a poll with two proposed solutions. They can then vote on these solutions and see which solutions have the most votes. In addition, there is a dashboard that lists every employee ordered by the number of polls they've created and answered.

## Redux

For this application, most of the application’s state is managed by Redux.The redux store is the source of truth and components read the necessary state from the store instead of having their own versions of the same state. There are no direct API calls in components’ lifecycle methods, and updates should are triggered by dispatching action creators.

## Unit Testing

This app also contains unit test. Using Jest as a test runner is one way to accomplish this. Jest is a JavaScript testing framework built by Meta and primarily designed for React applications. Test scripts are inside the [`test`](src/tests)-Folder.

## Database

To simplify the development process, a fake Database was provided. The provided file [`_DATA.js`](src/_DATA.js) contains the data and functions needed to perform necessary operations.

## How to start the app

- Make sure your Node.js version is not deprecated. The app is developed with Node version 16 (16.19.0).
- install all project dependencies with `npm install`
- start the development server with `npm start`
- now, the app should be running on localhost port 3000
- to start tests use the command `npm test`

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
