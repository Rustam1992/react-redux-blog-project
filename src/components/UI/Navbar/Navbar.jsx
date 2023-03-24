import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

export function NavBar() {
    const { isAuth, setIsAuth } = useContext(AuthContext)
const logout=()=>{
    setIsAuth(false)
    localStorage.removeItem('auth')
}

    return (<div className='navbar'>
        <div className='nav__links'>
            <MyButton onClick={logout}>выйти</MyButton>
            <Link to='/about'>О сайте</Link>
            <Link to='/posts'>Посты</Link>
        </div>
    </div>)
}