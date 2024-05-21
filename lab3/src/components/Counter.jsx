import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../redux/increaseAction';

export default function Counter() {

    const {count} = useSelector((state)=>state.counterSlice)
    const dispatch = useDispatch();

    const increaseHandler = ()=> {
        dispatch(increase())
    }
    const decreaseHandler = ()=> {
        dispatch({type: 'DECREASE', payload: 2})
    }

  return (
    <div className='p-5 text-center'>
        <h1>Counter component</h1>
        <div className="container">
            <p>Counter : {count} </p>
            <button className='btn btn-success mx-2' onClick={increaseHandler}>+</button>
            <button className='btn btn-danger mx-2' onClick={decreaseHandler}>-</button>
        </div>

    </div>
  )
}
