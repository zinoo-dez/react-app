import { useReducer } from 'react'
const initialState = { count: 0 }
function reducer(state: typeof initialState, action: { type: string }) {
     switch (action.type) {
          case 'increment':
               return { count: state.count + 1 }
          case 'decrement':
               return { count: state.count - 1 }
          case 'reset':
               return { count: 0 }
          default:
               return state
     }
}
function CounterReducer() {
     const [state, dispatch] = useReducer(reducer, initialState)
     return (
          <div>
               <h1>Count: {state.count}</h1>
               <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
               <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
               <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
          </div>
     )
}

export default CounterReducer