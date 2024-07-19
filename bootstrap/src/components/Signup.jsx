import React from 'react'

const Signup = ({click}) => {
  return (
  
    <div style={{height:"100vh",backgroundColor:"lightgreen",margin:"auto"}} className='d-flrx  align-items-center  justify-content-center w-100 '> 
          <div style={{width:"300px",height:"min-content",borderRadius:"5px",color:"aliceblue", padding:"20px"}} className='login bg-dark rounded'>
       <h2 className='mb-3'>Signup From</h2>
       <div className='from-group mb-2'>
        <label htmlFor="text" className='from-label'>your name</label><br />
        <input type="text" className='from-control' name="" id="" required /> 
        </div> 
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

        <button type='submit' className='btn w-100 btn-success mt-2'>SIGN Up</button>    
      <a href="#"onClick={click} style={{padding:"30px"}}><u>Already have an account</u></a>
          </div>
    </div>
  )
}

export default Signup
