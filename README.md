This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running Project

Navigate into the project directory, run 

#### `$ yarn install` or `$ npm install` 

### Set up .env file

You'll need a .env file to provide the service url endpoint and authentication token, add them following this format:

#### `REACT_APP_SERVICE_HOST=[hostname].com`
#### `REACT_APP_SERVICE_URL=https://[hostname].com/[service-path]`
#### `REACT_APP_AUTH_TOKEN=[api key`

### Running and viewing UI 

Then open two terminals

In the first terminal run 
#### `$ node proxy.js` (make sure nothing is running on port 8011)
This proxy is required to circumvent CORS issues

In the second terminal run 
#### `$ yarn run start` or `$npm run start`
Navigate to localhost:3000

### To run the test suite run `$ yarn run test`

## Additional Dependencies

### @blueprintjs
I've been utilizing this component library for almost two years now and I quite like it, I felt that it would make the form elements a tad bit more aesthetically pleasing
### query-string
I feel like manually creating the url query string is a bit messy 
### lodash 
I like the utility and syntax of this library, use mainly for undefined/empty checks but also use it with <SimpleDataTable/> to dynamically get elements from each row's object
### react-grid-system
I like the simple syntax provided by this library to generate a flexbox grid, rather than manually writing the flexbox css
### redux-saga 
I have been using this redux middleware for the past two years to make any side effects/service calls in my applications, again I like the syntax and I feel like it makes handling promises a bit easier and human readable 
### short-id 
used to generate unique ids wherever needed in the application

## Additional Notes
I decided to quickly wrap things up therefore the actual visual side of the application is a bit incomplete, there are also other features like displaying service errors that I wanted to add and make more robust, as well as fixing some of the tests that I have written & adding more tests for the components under <RateQuoteApp />. However I tried my best when designing and implementing the "plumbing" of the application to imagine that it could possibly grow into a much larger app and thusly I put much thought and consideration into the project file setup, naming conventions etc. 


