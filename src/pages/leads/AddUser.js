import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./AddUser.css";
import {useNavigate} from "react-router-dom";

function AddUser() {
    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();
    const onsubmit = (user) => {
        console.log(user)
        const token = localStorage.getItem('token');
        axios.post("http://localhost:3002/admin/addUser",user,{
            headers: {
                Authorization: ` ${token}`
              }
        })
        .then(res => {
            alert("user add sucessfilly")
            navigate('/')
        } ).catch (err => console.log(err))
    }

  return (
     <>
     <div className="container user-container">
        <div className="row ">
            <div className="col-sm Aform-div" >
                <form onSubmit={handleSubmit(onsubmit)} style={{width:"50%"}} >
                    <h3 className='text-white text-center'>User Details</h3>
                    <label className='form-label text-white'>Name</label>
                    <input type='text' className='form-control ' {...register("name")}/>
                    <label className='form-label text-white'>Email</label>
                    <input type='text' className='form-control ' {...register("email")}/>
                    <label className='form-label text-white'>Phone</label>
                    <input type='text' className='form-control ' {...register("phone")}/>
                    <label className='form-label text-white'>Technology</label>
                    <input type='text' className='form-control ' {...register("technology")}/>
                    <label className='form-label text-white'>LeadOwner</label>
                    <input type='text' className='form-control ' {...register("leadOwner")}/>
                    <label className='form-label text-white'>Source</label>
                    <input type='text' className='form-control ' {...register("source")}/>
                    <label className='form-label text-white'>Stage</label>
                    <input type='text' className='form-control ' {...register("stage")}/>
                    <label className='form-label text-white'>Type</label>
                    <input type='text' className='form-control ' {...register("type")}/>
                    <label className='form-label text-white'>NewLead</label>
                    <input type='text' className='form-control ' {...register("newLead")}/>
                    <button className='btn btn-primary mt-2 px-5'>add</button>
                </form>
            </div>
        </div>
     </div>
     </>
  )
}

export default AddUser;
