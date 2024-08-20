// import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react'
import "./Skill/Skill.css"

const SkillName = (props) => {
  return (
    <>
    <span className="tick" >
    <ion-icon name="checkmark-circle-sharp" ></ion-icon>
    <span>{props.name}</span>
    </span>
    </>
  )
}

export default SkillName;