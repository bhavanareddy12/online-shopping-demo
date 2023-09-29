import React,{createContext, useReducer} from 'react'
import PageRouter from './routing/routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './parts/header/Header';
import Loader from './components/Loader';
import { bagCountReducer } from './store/bagCountReducer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StoreContext = createContext()
function App() {

  const[loading, setLoading] = React.useState(false)

  const initialvalue = 0;
  const [ state, dispatch ] = useReducer(bagCountReducer, 0);

  const providerState = {
    state,
    dispatch
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },2000)
  },[])

  return (
    <StoreContext.Provider value={providerState}>
    {loading ? <Router>
        <Header/>
        <PageRouter/>
      </Router> : <Loader/>}
    </StoreContext.Provider>
    
  );
}

export default App;

