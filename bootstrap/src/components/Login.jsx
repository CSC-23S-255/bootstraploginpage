import React from 'react'


const Login = ({click}) => {
  return (

    <div style={{height:"100vh"}} className='d-flrx bg-dark align-items-center  justify-content-center w-100 '> 
          <div style={{width:"300px",height:"min-content",borderRadius:"5px", backgroundColor:"aliceblue",color:"black", padding:"20px"}} className='login rounded '>
       <h2 className='mb-3'>Login From</h2>
       <div className='from-group mb-2'>
        <label htmlFor="email" className='from-label'>Email address</label><br />
        <input type="email" className='from-control' name="" id="" required /> 
        </div>  
        <div className='from-group mb-2'>
        <label htmlFor="password"className='from-label'>password</label><br />
        <input type="password" className='from-control' name="" id="" required /> 
        </div>  
        <div className='from-group mb-2 from-check'>
            <input type="checkbox" name="" id="" />
        <label htmlFor="checkbox" className='from-check-label'>remember me</label>
        </div>     

        <button type='submit' className='btn w-100 btn-success mt-2'>SIGN IN</button>    
      <a href="#"onClick={click} className='m-5 mt-5'><u>Create an Account</u></a>
          </div>
    </div>
  )
}

export default Login
