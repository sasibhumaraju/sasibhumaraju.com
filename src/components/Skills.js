import React, { useEffect, useRef } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import './Skills.css';
import bulb from '../assets/skill.json';
import c from '../assets/skill/c.svg';
import css from '../assets/skill/css.svg';
import firebase  from '../assets/skill/firebase.svg';
import git from '../assets/skill/git.svg';
import html from '../assets/skill/html.svg';
import java from '../assets/skill/java.svg';
import js from '../assets/skill/js.svg';
import mysql from '../assets/skill/mysql.svg';
import postman from '../assets/skill/postman.svg';
import dsa from '../assets/skill/dsa.svg'
import react from '../assets/skill/react.svg';
import spring from '../assets/skill/spring.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';

  const icons = [dsa,react,js,html,css,java,spring,mysql,firebase,c,git,postman]
  const skillName = ['DSA', 'ReactJs','JavaScript','Html','Css','Java','SpringBoot','Mysql','Firebase','C','Git','postman'];
  const cardData = icons.map((v,i)=>{
    return { "icon" : v, "name" : skillName[i] };
  })

 function Skills () {
   

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bulb,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice"
    // }
  };

  function leftScroll () {
     var slider = document.getElementById('Slider');
     slider.scrollLeft = slider.scrollLeft - slider.offsetWidth;
  }

  function rightScroll () {
    var slider = document.getElementById('Slider');
    slider.scrollLeft = slider.scrollLeft +  slider.offsetWidth;
  }

  

  const child   = { width: `30em`, height: `100px`}
  

  
    return(
        <div className='Skills'>
            <div className='SkillsTitle'> About Me and My Skills  </div>
            <div className='SkillsAboutMe'> As a  passionate  and driven computer science and engineering student with experience in various programming languages and technologies. My passion for  mobile development and interface design started with developing an Android app using  Flutter  and Android Studio. I have honed my problem-solving skills in  data structures and algorithms through online resources. I have also  developed web projects using React JS and Java Spring Boot with dynamic and intuitive interfaces. I am a versatile and motivated developer committed to producing  efficient solutions  to complex problems.</div>

          
            <div className='SkillsNames' >
              <img className='arrow-left arrow' src={left} onClick={leftScroll}></img>
               <div id="Slider" className='SkillsCardList'>
                  {cardData.map((v,i)=>{
                   return <div key={i}  className='SkillsNamesCard' > 
                                
                                <img className='SkillsNamesCardImage' src={v.icon}/>  
                                <div className='SkillsNamesCardText'> {v.name}</div>
                              </div>
                    })}  
                </div>
              <img className='arrow-right arrow' src={right} onClick={rightScroll}></img>         
           </div>
      </div>
    )
 }
 export default Skills;