import { useEffect, useState } from 'react'
import React from 'react'
import '../css/showmaster.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Showmaster=async()=>{
    const [master,setmaster]=useState(null)
    const param=useParams()
    var userstore=JSON.parse(localStorage.getItem('userinfo'))
    useEffect(()=>{
      var t= axios.post('http://127.0.0.1:8000/api/ostad/request',{userinfo:userstore.user.id,masterinfo:param.id})
      console.log(t)
    })

    // return(<>
    //    {Object.keys(master).length!==0 && <article className='master w-100 h-100 d-flex justify-content-center align-items-center'>
    //     <div className="product-card mt-4">
    //     <div className="product-image" style={{backgroundImage:'/main_pics/pretty_teacher.png'}}></div>
    //     <div className="product-content">
    //       <h3 className="product-title">{master.phone}</h3>
    //       <div className='text-left'>
    //         <span>شهر : {master.city}</span>
    //       </div>
    //       <div>
    //         <span>تخصص ها :</span>
    //       </div>
    //       <p className="product-description">{master.skills}</p>
    //       <p className="product-price text-left">هزینه آموزش آنلاین : {master.online_price}</p>
    //       <p className="product-price mt-2">هزینه آموزش حضوری : {master.offline_price}</p>

    //       <div className="mt-5 mx-auto score-btn d-flex justify-content-between">
    //         <button href="#" className="pos border-0">امتیاز نمیدهم</button>
    //         <button href="#" className="neg border-0">امتیاز میدهم</button>
    //       </div>
    //     </div>
    //   </div>
    // </article>}</>
    // )
}
export default Showmaster