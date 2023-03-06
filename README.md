# useReducer Example

Here is a modest example of when useReducer() makes sense in a given React project.

This example was heavily inspired by a great YouTube video by Harry Wolff. You can
[find it here](https://www.youtube.com/watch?v=o-nCM1857AQ&list=WL&index=1&t=959s).

Highly recommended.

For a quick look at the Javascript `array.reduce()` method, [see my codepen](https://codepen.io/garytalmes/pen/PoQPgZB?editors=1112).

## The useReducer() Hook

The useReducer hook accepts two arguments:

- A function that will be run whenever state needs to be changed (the reducer function itself)
- The initial state of the application

This hook then returns back two things:

- A variable representing the current state of the app  (typically named state)
- A variable representing the method to be called whenever state needs to be updated (typically named dispatch)

Because the useReduce hook is usually employed with complex states that involve objects, the dispatch method is set up to allow you to provide different rules for whatever part of state you need to modify. It does this by allowing you to pass an object to the dispatcher anytime you call it. This object usually consists of the specific action to be performed, and whatever data that action requires.

So, when we are ready to change state, we might call:

   ```dispatch({ type: updateName, prop: "name", newValue: "Henry" })```

This in turns calls the reducer function itself. The dispatcher automatically provides the current state to the reducer, along with all the info provided by you.

The reducer function looks up the appropriate action, applies the data to it, and generates updated state. It then returns that updated state.
