import React from 'react';
import "./Signin.css";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

function Signin() {
    const {register,handleSubmit,formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = async(user) => {
        console.log (user)
          try {
                const response = await axios.post ('http://localhost:3002/admin/authenticate',user);
                console.log(response)
                const token = response.data.token;
                localStorage.setItem('token', token);
                navigate("/");
          }
          catch (error) {
            console.log(error);
          }
    };
        
    
  return (
    <>
    <div className='container signin'>
        <div className='row'>
            <div className='col-sm'>
                <div className='heading-div'>
                    <h1>Kona<span>digital.ai</span></h1>
                </div>
                <div className='form-div'>
                    <h1>SIGN IN</h1>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                       <div className='input-div '>
                            <input type='text' placeholder='User' 
                                {...register("username",{required:true})}
                                />
                                {/* <p className="text-danger">
                                    {errors.email?.type === "required" && "Please enter email"}
                                    {errors.email?.type === "pattern" && "Please enter valid format"}
                                </p> */}
                            <input type='password'  placeholder='PASSWORD'
                                {...register("password",{required:true})} 
                                />
                                {/* <p className="text-danger">
                                    {errors.password?.type === "required" && "Please enter password"}
                                    {errors.password?.type === "pattern" && "Please enter valid format  at least a symbol upper and lower case letters and a number"}
                                </p> */}
                       </div>
                       <div className='a-div'>
                        <button>Forget Password?</button>
                       </div>
                       <div className='b-div'>
                        <button>SIGN in</button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin;


