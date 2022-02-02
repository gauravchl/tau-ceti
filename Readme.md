# Tau Ceti

### Project structure

| Name         | Tech                            | Production Link                       |
| ------------ | ------------------------------- | ------------------------------------- |
| Backend      | Node/Express/PostgreSQL/GraphQL | https://backend.gauravchl.com/graphql |
| Frontend MVP | Pure HTML/CSS/javaScript        | https://tau-ceti-vanilla.netlify.app  |
| Frontend V2  | React/Apollo/GraphQL/Tailwind   | https://tau-ceti-react.netlify.app    |

<img width="420" alt="Project structure" src="https://user-images.githubusercontent.com/3471415/152156546-76522eb8-427e-44e5-8bff-d91674e9f62c.jpg">

#### Backend

- First version of the backend is implemented with Node + Express server that provides REST API for vanila frontend.
- Backend is deployed on Digital Ocean and it uses PostgreSQL Database to store the data.
- For the V2, GraphQL is integrated into existing backend because of its subscription model. It basically enables the display of the rating in real-time over websocket.
- Apart from Subscription, V2 also provides Query/Mutation for operations.
- GraphQL playground is available here https://backend.gauravchl.com/graphql

  ```bash
  # Quickstart
  cd ~/backend
  yarn install # start dependencies first
  yarn start # Start the server on port 8080

  # Make sure postgres is running and node/yarn is install
  ```

#### Frontend vanila(MVP)

- This frontend is purely implemented with HTML/CSS/JS without any library or framework.
- It uses REST API to connect to backend.
- It uses latest browser features such as ES6 Template Literals, async/await and Fetch API. For best possible results please run it on latest Chrome browser.
- Vanila frontend is deployed on Netlify.

  ```bash
  # Quickstart
  cd ~/frontend_vanilla
  yarn install http-server -g # install simple http-server
  http-server # Start the app on port 8081
  ```

#### Frontend React(V2)

- V2 Frontend is built using React(Create React App).
- It uses GraphQL(Apollo lib) to connect to backend.
- It uses GraphQL's Subscription over websocket to display reviews in real-time.
- It is also deployed on Netlify.

  ```bash
  # Quickstart
  cd ~/frontend_react
  yarn install # install dependencies
  yarn start # Start the app on port 3000
  ```
