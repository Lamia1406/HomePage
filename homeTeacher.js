import React from 'react';
import "../styles/home.css";
import Header from "../partials/header";
import SideMenu from "../partials/side-menu";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";

//assets
import plus from '../assets/plus.svg';
import avatar from '../assets/avatar.svg';


function homeTeacher(){
    const navigate = useNavigate();
  const accountType = window.localStorage.getItem("accountType");

  useEffect(() => {
    const loggedIn = window.localStorage.getItem('loggedIn');
    if (!loggedIn) {
      navigate('/login');
    }
  }, []);
    <div className="home-page" id='homeTeacher'>
    <Header />
    <div className="home">
      <SideMenu type={accountType} page='homeTeacher'/>
      <div className="main-page">
      <div className="main-page">
        <div className="welcome-belala-nabil">
          <div className="welcome">
            <p>Welcome</p>
            <p>Belala Nabil</p>
          </div>
          <div className="start-new-session">
            <button> 
              <img src={plus}></img>
            <p>Start new session</p>
            </button>
          </div>
        </div>
        <div className="profile-div">
            <img src={avatar} alt="avatar" className="big-icon " />

        </div>
        </div>
      </div>
    </div>
  </div>
}

export default homeTeacher;