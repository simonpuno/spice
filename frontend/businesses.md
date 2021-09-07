Phase 4: Bench Backend

Create a Bench model with required description (string) , lat (float) and lng (float) attributes.
Make a BenchesController to handle your API requests. It will need index and create actions to start.
Add routes for your BenchesController actions.
These should be namespace-d under api/benches and return JSON by default.
Populate seeds.rb with bench seed data using real coordinates in SF (click around to get coordinates).
Test your benches API in the Dev Tools console using $.ajax calls.
Phase 5: Bench Redux Cycle
In this phase, you will build the pieces necessary to display a basic index of benches.

BenchApiUtil
To start, let's create an API utility for our thunks to use that will request data via AJAX from our Rails server.

Create a file, /util/bench_api_util.js, that exports a function, fetchBenches.
It should dispatch an $.ajax request and return a promise. As usual, the success function will be chained onto this promise in the thunk action creator. You may choose to define an error callback for debugging.

Your function should look something like this:

// frontend/util/bench_api_util.js

export const fetchBenches = () => {
  return $.ajax({
    method: // ,
    url: //,
    error: (err) => console.log(err)
  })
}
As before, put this function on the window for testing, and make sure it works before moving on!

Bench State Shape
We want to build a bench state that has the following shape:

entities: {
  benches: {
    1: {
      id: 1,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    2: {
      id: 2,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    3: {
      id: 3,
      description: "...",
      lat: 0.0,
      lng: 0.0
    }
  }
}
Note that our benches object use each bench's id as a primary key. The benches key is also nested under the entities key, where we keep all of our relational data.

Action Creators
Before we move on to the fun stuff -- populating a Google map with benches from our database -- we need to write an actions file that helps our other major pieces function.

We need two actions: one to go fetch all the benches from our Rails API, and one that tells our store to change our application state to represent the bench data in our action.

Create an actions file: actions/bench_actions.
Write receiveBenches. It should accept a single argument, benches, and produce an action with type "RECEIVE_BENCHES" and a benches property that represents all of our bench data.
Write fetchBenches. It doesn't need to accept any arguments. It should just return a thunk which calls the APIUtil and then dispatches receiveBenches.
Don't forget to define the corresponding action types.
Export fetchBenches and your constants.
Before continuing, test that they return the correct objects. For example, add fetchBenches to the window for testing later!

// frontend/bench_bnb.jsx
window.dispatch = store.dispatch;
window.getState = store.dispatch;
window.fetchBenches = fetchBenches;

// now we can test our code from the console
dispatch(fetchBenches()).then(console.log); //=> { "1": { id: 1, description: ... } }
Remember to import fetchBenches for testing.

Benches Reducer
In this step, we're going to create a reducer that manages the benches section of our application state.

Create a file, reducers/benches_reducer.js that exports a benchesReducer function.
Let's start by just setting up our benchesReducer to return its default state: Remember to use Object.freeze to prevent the state from being mutated.

Have your benchesReducer update the benches in your state when it receives the RECEIVE_BENCHES action. Your reducer should look like this:

// frontend/reducers/benches_reducer.js

import { RECEIVE_BENCHES } from "../actions/bench_actions";

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};
Entities Reducer
Be sure to add your benchesReducer to your entitiesReducer.

// frontend/reducers/entities_reducer.js

import { combineReducers } from "redux";

import benchesReducer from "./benches_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchesReducer
});

export default entitiesReducer;
At this point, our default application state should look like this.

{
  session: {
    id: null,
  },
  errors: {
    session: []
  },
  entities: {
    benches: {},
    users: {}
  }
}
Phase 6: BenchIndex Components
Let's create a component that shows our benches.

First we'll start by making make two files: components/bench_index.jsx and components/bench_index_container.js
After we've made both of these components, we'll add the container to our App component with the rest of our routes so it's rendered when users visit our site.

The Container Component
Inside your container component, connect your BenchIndex as outlined below. Don't worry that we haven't constructed BenchIndex yet; but we'll fix that in the next step!

mapStateToProps
Our BenchIndex component needs state information about the benches in order to render.

mapDispatchToProps
The BenchIndex also needs a way to trigger a request for benches once it has mounted. Let's give it a fetchBenches prop that it can use to call a dispatch with the fetchBenches() action creator.

Export it!
Finally, let's use the connect function to export a new component that is connected to our store.

// frontend/components/bench_index_container.jsx

import BenchIndex from "./bench_index.jsx";

//...

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
The Presentational Component
Let's create the BenchIndex presentational component. It should render a list of benches, showing the description of each bench.

// frontend/components/bench_index.jsx

class BenchIndex extends React.Component {
  componentDidMount() {
    // request benches from your API here
  }

  render() {
    // ...
  }
}
Create another BenchIndexItem, to clean up your BenchIndex component's render() function.

Render Time!
Let's make sure that our BenchIndexContainer renders only at the root path "/". To do so, we'll use the exact prop.

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);
Your app should now be populated with benches! Confirm with a TA.