# Shore Store App

### Dependencies/Technologies
The app is built using the following technologies:

- React.js, Styled components/CSS, Jest, Enzymes.

### The tool you need to have installed on your machine:
- [Node.js](https://nodejs.org/en/download/)

`NB`: Fetching data from [glitch](https://store-api.glitch.me/api/products) is being blocked by cors. I have come up with a way around this by using a proxy, I understand that it's not the ideal solution, but you can try access the api endpoint without a proxy and see if it will work on your end.

### App setup and installation:
- Clone the repository [here](https://github.com/hariclerry/shoe-store-app) 

#### To run the app locally

```
npm install
```

```
npm start
```

The app now should be running on https://localhost:3000. 

#### To run tests:

```
npm run test
```

### Discussion

#### Implementations
1. User’s should see the products.
    - Api requests is being made to the products' api and products are displayed on the page for the users

2. User’s should be able to add products to the cart.
   - I implemented the add products functionality as per the requirements whereby users are able to add products to the cart and remove products.
3. User’s should be able to “pay” (no real operations behind)
   - I implemented a simple payment form to simulate payement when a user wants to make payments for the items they have add to the cart.

#### Requirements

The React app should include :
1. Both functional and class based components
    - The implementations include both functional and class based components with the use of both hooks and states
2. Hooks
    - The app has been implementated with various hooks such as useState, useEffect, useReducer, etc.
3. A state management solution (choose what suits best)
    - The state management solution chosen is Context Api with useReducer and local storage for persisting data.
   
4. A component styling library
   The component styling library used is the styled-components for styling the app.

#### Test
 - Setup testing using Jest test runner and Enzymes testing utility
 - Wrote tests for the implemented components and functionalities

#### Live Demo
The app has been dployed on Netlify [here](https://jovial-benz-909d74.netlify.app/)
