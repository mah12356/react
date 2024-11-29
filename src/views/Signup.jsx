import '../css/login.css'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Signup =()=>{
    const [ x,setx]=useState(0)
    var navigate = useNavigate()
    useEffect(()=>{
        if(typeof(localStorage.getItem('userinfo')) != undefined || localStorage.getItem('userinfo') != null){
            // navigate('/')
        }
    },[])
    const schema = yup.object().shape({
        'phone':yup.string().min(10,'شماره همراه نباید بیشتر و کمتر از ۱۰ رقم باشد').max(10,'شماره همراه نباید بیشتر و کمتر از ۱۰ رقم باشد').required('این فیلد را پر کنید').matches('^[0-9]{10}$','باید مطابق شماره موبایل باشد'),
        'image':yup.mixed()
        .test('fileSize','حجم فایل نباید بیش از ۲ مگابایت باشد'
            ,(value)=>{return value && value[0].size <= 2000000})
        .test('type','فرمت jpeg,jpg قابل قبول است',(value)=>{
            return value && !['JPG','PNG','jpg','png'].includes(value[0].type)
        })
    })

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    const mysubmit =(data)=>{
        const formdata=new FormData()
        formdata.append('image',data.image[0])
        formdata.append('phone',data.phone)
        axios.post('http://127.0.0.1:8000/api/ostad/signup',formdata)
        .then(res=>localStorage.setItem('userinfo',JSON.stringify(res.data))).then(setx(x+1))
        if(typeof(localStorage.getItem('userinfo')).phone!==undefined){
            navigate(-1)
        }
    }
    return(
        <article className='d-flex flex-column align-items-center sign-art justify-content-center'>
        <form onSubmit={handleSubmit(mysubmit)} className='d-flex align-items-center rounded-3 pt-5 flex-column auth mx-auto'>
            <label htmlFor="phone">
                <input className='rounded' type="tel" name='phone' id='phone' {...register('phone')} dir='rtl' placeholder=' شماره همراه'/>
            </label>
            <label htmlFor="image" className='image-label rounded d-flex flex-column my-2 text-center'>انتخاب عکس پروفایل
                <input type="file" {...register('image')} name='image' id='image'/>
            </label>
            <input type='submit' value={'ثبت نام'} className='btn btn-success w-25'/>
        </form>
        {errors.phone && <p className='error mt-3 rounded'>{errors.phone?.message}</p>}
        {errors.image && <p className='error p-1 text-white mt-3 rounded'>{errors.image?.message}</p>}
        {x>0 && typeof((localStorage.getItem('userinfo')).massage)!==undefined && <p className='error p-1 text-white mt-3 rounded'>{(JSON.parse(localStorage.getItem('userinfo'))).massage}</p>}
        </article>
    )
}
export default Signup