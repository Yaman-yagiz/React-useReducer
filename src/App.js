import './App.css';
import { useReducer } from 'react';

function App() {

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return {
            ...state, 
            name: action.payload
          }
        case "ADD_NAME":
          return {
            ...state, 
            names: [...state.names, state.name], 
            name: ""
          }
        default:
          return null
      }
    },
    {
      names: [],
      name: "",
    }
  )

  return (
    <div className="App">
      <header className="App-header">
        <p> Merhabalar</p>
        <input 
          type='text'
          value={state.name}
          onChange={e => dispatch({ type:"SET_NAME", payload: e.target.value })}
        />
        <div>
          Name: {state.name}
        </div>
        <div>
          <button onClick={() => dispatch({ type:"ADD_NAME" })}>Add Name</button>
        </div>
        <div>
          <p>
            İsim listesi
          </p>
          {state.names.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
