import React from 'react'
import Template from '../components/Template';
import login from '../assets/login.png'

function Login({setIslogin}) {
  return (
    <Template 
    title='WelCome Back'
    desc1='Build skills for today, tomorrow and beyond'
    desc2='Education to future proof your career'
    image={login}
    formtype='login'
    setIslogin={setIslogin}
    />
  )
}

export default Login;