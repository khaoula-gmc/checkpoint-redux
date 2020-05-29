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
      if (props.count>0) 
      props.dispatch({ type: "DECREMENT" });
    };
   
    const reset =()=>{
      props.dispatch({type:"RESET"})
    }
    return (
      <div className="counter">
        <h2>{props.count}</h2>
        <div className='counter-comp'>
          <button onClick={() => decrement()}>-</button>
          <button onClick={()=>reset()}>Reset</button>
          <button onClick={() => increment()}>+</button>
          
        </div>
      </div>
    );
   };
   
   
   export default connect(mapStateToProps)(Counter);