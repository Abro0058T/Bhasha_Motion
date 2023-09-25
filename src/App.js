import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Edit2 from './components/Edit2';
import TwitterVideoShare from './components/TwitterVideoShare';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      <Route exact path='/edit' element={<Edit2/>}/>
      <Route exact path='/post' element={<TwitterVideoShare/>}/>
      {/* <Route exact path='/edit' element={<Edit/>}/> */}
    </Routes>
    </>
  );
}

export default App;
