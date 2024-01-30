import React from "react";
import { UseDispatch, useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";


function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        //most of the services of appwrite returns a promise
        authService.logout.then(() => {
            dispatch(logout());//store should  get updated with latest state
        })
    }
    return (
        <button 
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >
        </button>
    )

}

export default LogoutBtn;