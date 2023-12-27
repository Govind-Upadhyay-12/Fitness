import {useSelector} from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
 const user =useSelector((state)=>state.user.UserData);
 console.log(user);
  return user? <Outlet/> : <Navigate to='/Signin'/>
}