import React,{useState} from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [islogedin,setlogedin]=useState(true)

  const change = ()=>{
      setlogedin(!islogedin)
  }
  return (
    <div>
      {
        islogedin?<Login click={change}/>:<Signup click={change}/>
      }
    </div>
  )
}

export default App
