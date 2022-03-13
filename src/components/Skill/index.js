import React from "react";
import Styles from "./style.module.scss";

const Skill = props => {
  return (
    <div>
      <div className={Styles.skill}>
        <img src={props.source} alt='' />
        <div className={Styles.skillName}>{props.name}</div>
      </div>
    </div>
  );
};

export default Skill;
