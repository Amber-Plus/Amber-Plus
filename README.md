
# Amber-Plus

A supplement tool to AMBER alerts for CSCI499 at Hunter College.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses the [Materal UI](https://material-ui.com/) component library and theme.


### Team Members
- Aqib Haq
- Quymbee Chen
- Michelle Lucero
- Yugine Lama
- David Ullauri

  
## Quick Start

To run the application locally:
```
cd amber-plus //be in root directory
npm install   //install dependencies
npm run dev   //runs fe + be on http://localhost:3000
```

## Getting  Started

### Table of Contents
- [Available Scripts](#Available-Scripts)
- [Application Structure](#Application-Structure)
- [Configuration](#Configuration)
- [Coding Practices](#Coding-Practices)
- [Technologies Used](#Technologies-Used)

### Available Scripts

In the project directory, you can run:
  
**`npm run dev`**
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
  
  **`npm i`**
Installs all the dependencies specified in the `package.json`
Run this to make sure you're up to date with all the project's third party modules.
Make sure to in this command in both the root directory and the backend folder.

**`npm run test`**  
Runs the unit tests once through.

**`npm run test:watch`**  
Runs the unit tests in the interactive watch mode.

See the section about  [running tests](https://facebook.github.io/create-react-app/docs/running-tests)  for more information.

### Application Structure
```
- backend
  + config
  + middleware
  + models
  + modules
  + routes 
+ build
+ node_modules
- public
  + uploads
- src
  + api
  - components
    + common
    + Login
    + Nav
    + PersonAlert
    + UserProfile
  + constants
  + context
  + pages
  + utils
```
The frontend uses absolute paths, so imports should be relative to the  `src`  directory.

### Configuration

#### Backend

In `backend/config`, you must have a `default.json` file containing your mongoURI string that connects you to your mongoDB.

ex: 
```
{
"mongoURI": "mongodb+srv://<user>:<password>@mernshoppractice.epvsh.mongodb.net/<database>?retryWrites=true&w=majority",
}
```

#### Frontend
In the root directory, create an `env` file.

Some env variables you need:
```
REACT_APP_MAPQUEST_KEY   // mapquest helps with lat&lng conversion
REACT_APP_MAPQUEST_SECRET  
REACT_APP_CARIMAGERY_KEY  // carsxe api key
```
### Coding Practices

#### Module Imports
For imports, try to follow the order:

1.  Standard modules
2.  Third-party modules
3.  Your code imports (components, etc.)
4.  Imports specific to the module (e.g. CSS, PNG, etc.)

Try to destructure props and pass defaults in function parameters for functional components.

#### Pull Requests
All PRs need approval from at least one team member before it can be merged to master.


### Technologies Used
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [Moment](https://momentjs.com/)
- [react-leaflet](https://react-leaflet.js.org/)
- [Map Quest](https://developer.mapquest.com/)
- [MongoDB](https://www.mongodb.com/1)
- [lodash](https://lodash.com/)
- [carsxe](https://api.carsxe.com/docs)
- [axios](https://www.npmjs.com/package/axios)
