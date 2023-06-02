# Instructions how to run code:

Firstly, clone repository on your device

## server

To setup server:

```
Open sever folder (cd server);
Write command npm install;
Write command npm run server
```

## client

To setup client side:

```
Open client folder (cd client);
Write command npm install;
Write command npm start
```

# e2e testing (with cypress)

To make e2e test:

Firstly, make sure that server and client side working correctly

```
Open e2e folder (cd e2e);
Write command npm install;
Make sure that cypress installed (if it`s not try command: npm install cypress --save-dev. )
Write npx cypress open to run Cypress app
Choose appTest.cy.js to run e2e test
```
