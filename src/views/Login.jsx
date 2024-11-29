
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../css/login.css'


const Login =()=>{
    const [x,setx]=useState(0)
    var navigate = useNavigate()
    if(typeof(localStorage.getItem('userinfo')) != undefined && localStorage.getItem('userinfo') != null){
        // navigate(-1)
    }
    const schema = yup.object().shape({
        'phone':yup.string().required('این فیلد را پر کنید'),
    })

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    const mysubmit =(data)=>{
        axios.post('http://127.0.0.1:8000/api/ostad/login',data).then(res=>localStorage.setItem('userinfo',JSON.stringify(res.data)))
        if(localStorage.getItem('userinfo')!=null){
            navigate('')
        }
    }
    return(
   <article className='d-flex align-items-center sign-art justify-content-center'>
        <form onSubmit={handleSubmit(mysubmit)} className='d-flex align-items-center rounded-3 pt-5 flex-column auth mx-auto'>
            <label htmlFor="phone">
                <input className='rounded' type="tel" id='phone' {...register('phone')} dir='rtl' placeholder=' شماره همراه'/>
            </label>
            <button type='submit' className='btn btn-success w-25'>ارسال</button>
        </form>
        {errors.phone && (<p className='error mt-3 rounded'>{errors.phone?.message}</p>)}
        {x>0 && localStorage.getItem('userinfo')==null && <p className='error p-1 text-white mt-3 rounded'>این شماره در سایت وجود ندارد</p>}
    </article>
    )
}
export default Login