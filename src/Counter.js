import React from "react";
import { connect } from 'react-redux';
import './Counter.css'

const mapStateToProps = state => {
    console.log(state);
    return {
      count: state.count
    };
   };

   const Counter = props => {
    console.log(props);
    const increment = () => {
      props.dispatch({ type: "INCREMENT" });
    };
   
    const decrement = () => {
      props.dispatch({ type: "DECREMENT" });
    };
   
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div className='counter-comp'>
          <button onClick={() => decrement()}>-</button>
          <span className={props.count>=0?"count-blue":'count-red'}>{props.count}</span>
          <button onClick={() => increment()}>+</button>
        </div>
      </div>
    );
   };
   
   
   export default connect(mapStateToProps)(Counter);