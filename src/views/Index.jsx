import { useNavigate } from 'react-router-dom'
import '../css/index.css'
import React, { useRef, useState } from 'react'

const Index=()=>{
    const navigate = useNavigate()
    const inpref=useRef()
    const [y , sets]=useState(0)
    const [skill , setskills]=useState([])
    const fun=()=>{
        if(inpref.current.value !==null){
            skill.push(inpref.current.value)
            setskills([...skill])
            sets(y+1)
        }
    }
    const del=(e)=>{
        skill.splice(skill.indexOf((e.target.children)[1]['innerText']),1)
        sets(y+1)
    }
    const search=()=>{
        navigate(`/masters?search=${skill}`)
    }

   return(
        <>
            <article className="alerts mt-3 bg-warning mb-3 pb-2 pr-2">
                <span>روش جستجو</span>
                <p><i className="bi bi-check text-success"></i>فوتوشاپ <i className='mr-3 text-danger'>x</i>کارشناس فوتوشاپ ٬ فوتوشاپیست ٬ ...</p>
            </article>
            <div className='d-flex align-items-center justify-content-center'>
                <input ref={inpref} className='search' placeholder=' تخصص های مورد نیاز خود را جستجو کنید' name="search" type="search"/>
                <button onClick={fun} className="btn-success save mr-2 btn">ذخیره</button>
            </div>
            {y>0 && <article className='container-fluid d-flex flex-column mt-4 pr-4'>
                <section className="row">
                    {skill.map(x=> <p onClick={del} className='skill mx-2 bg-primary'>
                        <a className='cross text-white'>x</a>
                        <span className='mr-3 text-white'>{x}</span>
                    </p>)}
                </section>
                <button onClick={search} className='btn mt-3 mx-auto btn-success'>جستجو</button>
            </article>}
            
        </>
        )
}
export default Index