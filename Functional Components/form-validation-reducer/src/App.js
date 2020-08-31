import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action){
  return {
    ...state,
    [action.type]: action.payload
  };
}
const [state, dispatch] = useReducer(reducer, initialState);
function handleChange(e) {
  const { name, value } = e.target
  
  if(value.lenght < 3) {
    console.log(state[name].error)
    this.setState({
        [state[name].error] : `${name} should be at least 3 characters long`
    })
}

  dispatch({
    type: name,
    payload: value
  });
}

  return (
    <div className="App">
      {JSON.stringify(state)}
      <label>First Name:</label>
      <form>
        <input type="text" onChange={ handleChange} value = {state.firstName.value} name="firstName"></input><br></br>
        {state.firstName.error !== null && (
        <p className="error">{state.firstName.error}</p>
      )}
        <label>Last Name:</label>
        <input type="text" onChange={ handleChange} value = {state.lastName.value} name="lastName"></input><br></br>
        {state.lastName.error !== null && (
        <p className="error">{state.lastName.error}</p>
      )}
      <label>Email:</label>
        <input type="email" onChange={ handleChange} value = {state.email.value} name="email"></input><br></br>
        {state.email.error !== null && (
        <p className="error">{state.email.error}</p>
    )}  
      </form>
    </div>
  );
}

export default App;
