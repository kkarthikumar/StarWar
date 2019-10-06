### StarWAR Application

## Authors

Karthik Krishnasamy

## Installation

```
rm -rf node_modules
npm install
```

## Published URL

https://kkarthikumar.github.io/StarWar/#/

## Libraries Used

```
1.Redux
2.Lodash
3.Material UI (for RWD)
4.Redux Thunk
5.axios(for API call)
```

## Features

Create a React application having two screens with proper navigation. You
will be using API from the website http://swapi.co .Please go through the
documentation of the swapi website and understand the API response carefully
to chose the right set of APIs and call them with the proper arguments.
The application is supposed to have 2 screens:
Screen 1 (Login Screen)
Allow the user to login as a character from STAR WARS using the character
name as the username and birth year as the password.
Example:
• Username: Luke Skywalker
• Password : 19BBY

Screen 2 (Search Screen)
Implement a type-along search which searches for planets and lists them in
components that are sized relative to their population on every keypress in the
input field. (eg: you can use a bigger font size for a planet with larger population,
or even show a bigger container size for a planet with larger population - we
would like to see your creativity). On clicking the item from the results of the
type-along search, it should display the corresponding planet information.
You also need to provide the relevant Logout flow properly in your application.

## Bonus Points
  Only the user Luke Skywalker should be able to make more than 15 searches
in a minute.

## Improvements

 Need to improve the test coverage.
 
## Code WalkThrough

1. It contains folders actions, componenents, constants, containers, reducers, routes and styles
2. Actions contains redux actions.
3. Constants has the app constants(can configure no of searches and timing)
4. Containers are connected to the store to drill down the props to child components
5. Reducers are store chunks
6. Routes carry the react router routes
7. Styles are material UI styles used accross the application
