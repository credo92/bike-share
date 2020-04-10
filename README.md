This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Decision Choices and `setup`

Run yarn to setup all pacakages.

1. axios - api requests (simultaneously using Promise.all)

when person clicks on a country-> we fetch all cities href info for the matching country, 

then using Promise.all, we make a /GET request to 
get all data for all cities 

2. styled-components package 

3. react-redux / redux-thunk for managing state of the application and dispatching /GET request on a particular action ( using redux-thunk as middleware)




