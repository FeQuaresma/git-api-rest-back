# GITHUB API BACK-END APP

This project was created for the technical interview for Shaw and Partners.

## Application Purpose

The purpose of the back-end is to receive information from the GitHub API and treat the information that will be sended to the front-end when requested.

## Technologies Used

### Language:
Typescript

### Framework:
Node.Js

### Libs:
cors
dotenv
express
octokit
ts-node

## How to use

### Website

You can see the live Server on [https://git-api-rest-back.vercel.app](https://git-api-rest-back.vercel.app).

### Routes

GET "/", The homepage of the server
GET "/api/users", List the users from Github, using the querys "since" and "per_page".
GET "/api/users/:username/details", List the details of the user that was passed from the param "username".
GET "/api/users/:username/repos", List the repositories of the user that was passed from the param "username".

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the server in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
You will also see any lint errors in the console.

### `yarn build`

Builds the server for production to the `dist` folder.
The build is minified and the filenames include the hashes.
The app is ready to be deployed!


### `yarn start`

Runs the app on the builded version.
