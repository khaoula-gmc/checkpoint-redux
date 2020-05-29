import { createStore, applyMiddleware } from "redux";
import reducer from './reducer'



const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
   }
  
  const store = createStore(reducer, applyMiddleware(logger));
  
  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "DECREMENT" });
  store.dispatch({ type: "RESET" });


  export default store