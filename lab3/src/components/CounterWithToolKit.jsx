import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../Store/counterSlice';

export default function Counter() {
    const {count} = useSelector(state => state.x);
    const dispatch = useDispatch();

    const {increase , decrease} = counterActions;




    const increaseHandler = ()=> {

        dispatch(increase(5))
        
    }
    const decreaseHandler = ()=> {

        dispatch(decrease(2))

    }

  return (
    <div className='p-5 text-center'>
        <h1>Counter component with Tool Kit</h1>
        <div className="container">
            <p>Counter : {count} </p>
            <button className='btn btn-success mx-2' onClick={increaseHandler}>+</button>
            <button className='btn btn-danger mx-2' onClick={decreaseHandler}>-</button>
        </div>

    </div>
  )
}
