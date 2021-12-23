import React from 'react'
import jeremy from '../../images/image-jeremy.png'

import {ProfileWrapper} from './ProfileStyles'
const Profile = ({selectedTime,changeTime}) => {
    return (
       <>
        <ProfileWrapper>

            <div className = 'upperProfile'>

                <img src = {jeremy} alt ='Profiler'/>

                <h1><span className = 'report'>Report for</span><span  className = 'bigName'><br/>Jeremy Robson</span></h1>
            </div>

            <ul>
                <li onClick = {()=>changeTime('daily')} className = {`${selectedTime==='daily'? 'active': ''}`}>Daily</li>
                <li onClick = {()=>changeTime('weekly')} className = {`${selectedTime==='weekly'? 'active': ''}`}>Weekly</li>
                <li onClick = {()=>changeTime('monthly')} className = {`${selectedTime==='monthly'? 'active': ''}`}>Monthly</li>
            </ul>
        </ProfileWrapper>
       
       </>
    )
}

export default Profile
