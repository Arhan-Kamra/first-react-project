import React from "react";
import Styles from "./style.module.scss";

const SkillTitle = props => {
  return (
    <div>
      <h2 className={Styles.title}>{props.title}</h2>
    </div>
  );
};

export default SkillTitle;
