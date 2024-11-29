import React , { useEffect, useState} from 'react'
import Master from '../object-orient/Master'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import '../css/master.css'

const Masters = () => {
   const [UrlParam,seturl] = useSearchParams({})
   document.body.style.position='relative'
   const [skills,setskill]=useState([{}])
   const [z,setz]=useState(0)
   const filter={
      url:UrlParam.get('search'),
      online:UrlParam.get('online'),
      offline:UrlParam.get('offline'),
      city:UrlParam.get('city')
   }
   const changeurl=(numb,val)=>{
      if(numb==='0'){
         UrlParam.set('online',val);
         seturl(UrlParam);
      }else if(numb==='1'){
         UrlParam.set('offline',val);
         seturl(UrlParam);
      }else{
         UrlParam.set('city',val);
         seturl(UrlParam)
      }
    }
    const navigate = useNavigate()
    useEffect(()=>{
        if(UrlParam.get('search') === null || typeof(UrlParam.get('search'))===undefined){
            navigate(-1)
        }else{
            axios.post('http://127.0.0.1:8000/api/ostad/masters',filter).then(res=>{setskill([...res.data])}).then(setz(z+1))
        }
    },[])
    const filter_master=()=>{
      axios.post('http://127.0.0.1:8000/api/ostad/masters',filter).then(response=>setskill([...response.data])).then(setz(z+1))
    }
    return (
      <>
        <div className="container">
            <section className="row">
               <article className='master-form'>
                  <fieldset className='main-field rounded d-flex align-items-center flex-column flex-md-row justify-content-center'>
                     <legend>فیلتر</legend>
                     <fieldset className='py-2 online-learn pr-2'>
                        <legend className='mb-1'>هر ساعت اموزش آنلاین</legend>
                        <input type="number" name='online-to' onChange={e=>changeurl('0',e.target.value)} className='mr-2' inputMode='numeric' placeholder='تا قیمت'/>
                     </fieldset>
                     <fieldset className='py-2 online-learn pr-2'>
                        <legend className='mb-1'>هر ساعت اموزش حضوری</legend>
                        <input type="number" name='face-to-face-to' onChange={e=>changeurl('1',e.target.value)} className='mr-2' inputMode='numeric' placeholder='تا قیمت'/>
                     </fieldset>
                     <fieldset className='py-2 city pr-2'>
                        <legend className='mb-1'>شهر</legend>
                        <input onChange={e=>changeurl('2',e.target.value)} type="text" name='city'/>
                     </fieldset>
                     <button onClick={filter_master} className='bg-primary rounded px-2 text-white border-0'>پیاده سازی</button>
                  </fieldset>
               </article>
            </section>
         </div>
         <div className="main">
            <ul className="cards d-felx justify-content-between">
                {z===0 ? skills.map(item=>
                    <Master image={item.image} online={item.online_price} offline={item.offline_price} city={item.city} id={item.id}/>
                ):skills.map(item=>
                  <Master image={item.image} mid={item.id} online={item.online_price} offline={item.offline_price} city={item.city} id={item.id}/>)}
            </ul>
        </div>
      </>
    )
}
export default Masters