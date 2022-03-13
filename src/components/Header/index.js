import { NavLink, BrowserRouter as Router } from "react-router-dom";

import React from "react";
import Styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={Styles.container}>
      <section className={Styles.intro}>
        <p>Hi, I am</p>
        <h1>Tomasz Gajda</h1>
        <h2>Front End Developer / UI Designer</h2>
      </section>
      <div className={Styles.bioLinks}>
        <img src='' alt='' className='' />
        <img src='' alt='' className='' />
        <img src='' alt='' className='' />
      </div>
    </div>
  );
};

export default Header;
