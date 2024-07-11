# Weather Fetch UI for Technical Assessment

## Requirements

- Call the API at https://openweathermap.org/ to fetch the weather data
- Create an interface in pure HTML, CSS and TS (no frameworks except Redux,
Chrome compatible browser with latest ECMAScript features) 
- Takes a location as input and a button to query the above api and displays relevant
information in a clean design
- Include a README to explain how to test your code.

## Implementation

- For transpile typescript and evaluate result easily we use Webpack for the task runner.
- With simple HTML & CSS design with several functions in the Typescript controller
- Native Javascript APIs are used to render result on the UI

## Environment
- `Node.js` and `yarn` should be installed on your computer
- 

## How to Run
- Prefer use `yarn` for the node package manager.
- Cloning the repository, need to install the packages by running `yarn install`.
- `yarn dev` will run the local server and check the `http://localhost:8080`.
- Input any location in the input box and click "Get Weather" button.
- While the api call is in progress, you will see message "Loading data..." at the bottom of the input box.
- Prevents the search button multiple clicks using the Javascript Debouncing feature.

## Good to Add (TODO things, afterward)

There are several things still missing in the codebase but couldn't be here due to the timeline.

- Live (staging) server using GitHub pages, by creating a new branch and serving it, so you can check the result without any special efforts.
- Unit Test cases for each functions
- E2E test cases for simple user operations
- - User inputs location, clicking the search button, check the result
- - User inputs location wrong, clicking the search button, check the result, should show some error message "Invalid location input"
- - User inputs location any, tries to click the search button multiple times in one action, should be prevented by disabling the button.
- - User inputs location any, click the search button, util it, need to "Loading data..." (spinner purpose) should be shown
- Coding style checks (lints)