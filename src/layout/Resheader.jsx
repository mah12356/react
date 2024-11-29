import { NavLink } from "react-router-dom"
import React from "react"
const Resheader=(props)=>{
    return(
    <ul ref={props.men} className={`main__menu d-md-none col-md-8`}>
        <li className="list-item">
            <NavLink className="item--js">
                <span>خانه</span>
                <i className="bi bi-house-fill ml-3 text-dark"></i>
            </NavLink>
        </li>
        <li className="list-item">
            <NavLink className="item--js">
                <span>گوش به زنگ</span>
                <i className="bi bi-bell-fill text-dark ml-3"></i>
            </NavLink>
        </li>
        <li className="list-item">
            <NavLink className="item--js">
                <span>پشتیبانی</span>
                <i className="bi fs-5 bi-headset ml-3 text-dark"></i>
            </NavLink>
            <ul className="drop-menu menu-4">
                {/* <li className="drop-item"><a href="#" className="item--1">Big Widget</a></li>
                <li className="drop-item"><a href="#" className="item--2">Bigger Widget</a></li>
                <li className="drop-item"><a href="#" className="item--3">Huge Widget</a></li> */}
            </ul>
        </li>
        <li className="list-item">
            <NavLink className="item--js">
                <span>ورود</span>
                <i className="bi bi-box-arrow-in-left fw-900 fs-5 ml-3 text-dark"></i>
            </NavLink>
        </li>
    </ul>
)
}
export default Resheader