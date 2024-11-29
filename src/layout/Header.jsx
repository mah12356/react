import {useRef, useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import Resheader from "./Resheader";
const Header = ()=>{
    const menu=useRef()
    const [hamburger,sethamburger]=useState(false)
    const handle=(e)=>{
        if(e.target !== menu){
            sethamburger(!hamburger)
        } 
    }
    const logout=()=>{
        localStorage.removeItem('userinfo')
        window.location.reload()
    }
    return(
        <header className='bg-light' onClick={handle}>
            <button className="d-md-none fs-2 btn" onClick={(e)=>sethamburger(!hamburger)}><span className="bi bi-list-nested"></span></button>
            <nav className={`d-md-flex ${hamburger?'demo':'d-none'} nav justify-content-evenly`}>     
                <ul className={`main__menu d-none d-md-flex col-md-5`}>
                    <li className="list-item">
                        <NavLink to={''} className="item--js">
                            <span>خانه</span>
                            <i className="bi bi-house-fill ml-1 text-dark"></i>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink className="item--js">
                            <span>گوش به زنگ</span>
                            <i className="bi bi-bell-fill text-dark ml-1"></i>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink className="item--js">
                            <span>پشتیبانی</span>
                            <i className="bi fs-5 bi-headset ml-1 text-dark"></i>
                        </NavLink>
                        {/* <ul className="drop-menu menu-4">
                            <li className="drop-item"><a href="#" className="item--1">Big Widget</a></li>
                            <li className="drop-item"><a href="#" className="item--2">Bigger Widget</a></li>
                            <li className="drop-item"><a href="#" className="item--3">Huge Widget</a></li>
                        </ul> */}
                    </li>
                    {localStorage.getItem('userinfo')!=null ? <li className="list-item">
                        <a onClick={logout} className="item--js">
                            <span>خروج</span>
                            <i className="bi bi-box-arrow-in-left fw-900 fs-5 ml-1 text-dark"></i>
                        </a>
                    </li>:<li className="list-item">
                        <NavLink to={'/signup'} className="item--js">
                            <span>ورود و ثبت نام</span>
                            <i className="bi bi-box-arrow-in-left fw-900 fs-5 ml-1 text-dark"></i>
                        </NavLink>
                    </li>}
                </ul>
                {hamburger && <Resheader men={menu}/>}
            </nav>
        </header>
    );
}
export default Header