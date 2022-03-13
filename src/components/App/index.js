import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import About from "../../pages/About/index";
import CaseStudies from "../../pages/CaseStudies/index";
import Contact from "../../pages/Contact/index";
import Error404 from "../../pages/Error404/index";
import Header from "../Header/index";
import HomePage from "../../pages/HomePage/index";
import React from "react";
import Skill from "../Skill/index";
import SkillTitle from "../SkillTitle/index";
import Styles from "./style.module.scss";
import adobexD from "../../assets/images/adobexD.png";
import balsamiqmockups from "../../assets/images/balsamiqmockups.png";
import bootstrap from "../../assets/images/bootstrap.svg";
import css3 from "../../assets/images/css3.svg";
import figma from "../../assets/images/figma.svg";
import git from "../../assets/images/git.svg";
import googleanalytics from "../../assets/images/googleanalytics.jpg";
import html5 from "../../assets/images/html5.svg";
import jQuery from "../../assets/images/jQuery.jpg";
import javascript from "../../assets/images/javascript.svg";
import photoshop from "../../assets/images/photoshop.jpg";
import react from "../../assets/images/react.svg";
import sass from "../../assets/images/sass.svg";

const App = () => {
  return (
    <div>
      <Router>
        <ul className={Styles.navLinks}>
          {/* <li> */}
          <NavLink to='/homepage' activeClassName={Styles.active}>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName={Styles.active}>
            About
          </NavLink>
          <NavLink to='/case-studies' activeClassName={Styles.active}>
            CaseStudies
          </NavLink>
          <NavLink to='/contact' activeClassName={Styles.active}>
            Contact
          </NavLink>
        </ul>
        <Header />
        <Switch>
          <Route path='/homepage'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/case-studies'>
            <CaseStudies />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
      <SkillTitle title='using now:' />
      <section className={Styles.skill}>
        <Skill name='html5' source={html5} />
        <Skill name='sass' source={sass} />
        <Skill name='css3' source={css3} />
        <Skill name='javascript' source={javascript} />
        <Skill name='jQuery' source={jQuery} />
        <Skill name='react' source={react} />
        <Skill name='figma' source={figma} />
        <Skill name='photoshop' source={photoshop} />
        <Skill name='googleanalytics' source={googleanalytics} />
        <Skill name='balsamiqmockups' source={balsamiqmockups} />
        <Skill name='git' source={git} />
        <Skill name='bootstrap' source={bootstrap} />
      </section>
      <SkillTitle title='learning:' />
      <section className={Styles.skill}>
        <Skill name='html5' source={html5} />
        <Skill name='sass' source={sass} />
        <Skill name='css3' source={css3} />
      </section>
      <SkillTitle title='other skills:' />
      <section className={Styles.skill}>
        <Skill name='html5' source={html5} />
        <Skill name='sass' source={sass} />
        <Skill name='css3' source={css3} />
        <Skill name='javascript' source={javascript} />
        <Skill name='jQuery' source={jQuery} />
        <Skill name='adobexD' source={adobexD} />
      </section>
    </div>
  );
};

export default App;
