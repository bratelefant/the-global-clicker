# This is the ultimate multiplayer Global Clicker Experience

This is a playground side project, on [Meteor 3.0](https://www.meteor.com) + [React](https://react.dev), using Meteors optimistic UI.

## Production

Try it here: [www.global-clicker.com](https://www.global-clicker.com)

## Installation and Start

After cloning, run `meteor npm install`. The server is started with `meteor npm start`. Open `http://localhost:3000` to start testing your local instance.

## Functionality

At startup, the "Global Clicker" is inserted into the `clicker` collection. With each click, the `counter` of the clicker is incremented by 1.
All documents in the `clicker` collection are published to all participants since the `insecure` package is currently installed, which sends all database entries to all clients.

## Deployment

The Global Clicker is hosted on [Scalingo](https://www.scalingo.com). As soon as a pull request is merged into the `deploy` branch, the application is deployed. Changes in `deploy` can only be made via pull request and require a review.

## ToDo

- Remove AutoPublish
- Linting
- Tests 
- Docs 
- CI/CD (via GitHub Actions)