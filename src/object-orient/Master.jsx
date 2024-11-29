import '../css/master.css'
import React from 'react'
const Master = (props) => {
    var userstore=JSON.parse(localStorage.getItem('userinfo'))

/**width:418,height:250 */
    return (
        <>
            <div className="card mt-5">
                <div className="card_image">
                    <img src={`http://127.0.0.1:8000/images/${props.image}`} alt='' />
                </div>
                <div className="card_content">
                    <p className='text-right'>حضوری : {props.online} تومان</p>
                    <p className="text-left my-1">آنلاین : {props.offline} تومان</p>
                    <p className="text-right">شهر : {props.city}</p>
                </div>
                {userstore===null ? <p className='master-url pr-2'><a href='/login'>برای درخواست وارد شوید</a></p>:null}
                {/* <p className='text-left master-url pl-2'>
                    {(props.mid===userstore.user.free || userstore.user.free ===0) ? <a href={`telto:0${props.phone}`}>{props.phone}</a>
                    : userstore.user.free !==0 && props.mid!==userstore.user.free ?'برای دیدن شماره باید به استادی که درخواست دادید امتیاز دهید':null
                    }
                    </p> */}
                {userstore !==null && <div className='text-center pb-2 px-1'>
                    {(userstore.user.free===0) &&
                    <a href={`showmaster/${props.id}`} className="more px-2 text-white rounded">درخواست</a>}
                </div>}
            </div>
        </>
    )
}
export default Master