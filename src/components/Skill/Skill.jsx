import React from "react";
import "./Skill.css";
import SkillName from "../SkillName";

const Skill = () => {
  return (
    <section id='skill' className="skill card">
      {/* isko 1 div ka andr mai wrap karna hoha aur heading dalna hoga */}
        <h2 className="heading">My Skills</h2>
      <div className="cont1">
        <div className="onSkills">
          <SkillName name="HTML" />
          <SkillName name="JavaScript" />
          <SkillName name="CSS"/>
          <SkillName name="Java"/>
        </div>
        <hr />
        <div className="onSkills">
          <SkillName name="React" />
          <SkillName name="Redux" />
          <SkillName name="Tailwind CSS"/>
        </div>
        <hr />
        <div className="onSkills">
          <SkillName name="Git & GitHub" />
          <SkillName name="Three JS" />
          <SkillName name="BootStrap"/>
          <SkillName name="UI Verse.IO"/>
        </div>
      </div>
    </section>
  );
};

export default Skill;
