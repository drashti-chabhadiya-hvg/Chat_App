import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assest/Logo1.avif";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { loginRoute } from "../utils/APIRoutes";

export const Login = () => {
  const [values,setValues] = useState({
    username:"",
    password:"",
  })
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("chat-app-user")){
      navigate("/")
    }
  },[])
  const handleSubmit = async(e) => {
    e.preventDefault();
   if(handleValidation()){
    console.log('loginRoute', loginRoute)
    const {password,username} = values;
    const {data} = await axios.post(loginRoute,{
      username,password,
    });
    if(data.status === false){
      toast.error(data.msg,toastOptioins)
    }
    if(data.status === true){
      localStorage.setItem("chat-app-user",JSON.stringify(data.user))
      navigate('/');
    }
   }
  };
  const toastOptioins = {
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
  const handleValidation = (e) =>{
    const {password,username} = values;
    if(password === ""){
      toast.error("email and password is required.",toastOptioins)
      return false
    }else if(username.length === ""){
      toast.error("email and password is required.",toastOptioins)
      return false
    }
    return true
  }
  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={logo} alt="logo" style={{ color: "white" }} />
            <h1>happy</h1>
          </div>
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => handleChange(e)}
            name="username"
            min="3"
          />
        
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            name="password"
          />
         
          <button type="submit">Login In</button>
          <span>
            Don't have an account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer/>
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
      border-radius: 100px;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 2rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span{
      color: white;
      text-transform: uppercase;
      a{
          color:#4e0eff;
          text-decoration: none;
          font-weight: bold;
      }
  }
  }
`;
